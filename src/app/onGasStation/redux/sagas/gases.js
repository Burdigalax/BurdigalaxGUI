import { END, eventChannel } from "redux-saga";
import {
  call,
  cancelled,
  put,
  select,
  take,
  takeEvery
} from "redux-saga/effects";

import selectCountBuy from "../reducers/sceneState/selectors/select-count-buy";
import { getHasNoEnoughMoneyByRemainingMoney } from "../reducers/entities/player/getters/get-has-no-enough-money";
import { ON_BUY, STOP_BUY } from "../actions/gases";
import { updateShoppingCart } from "../actions/shopping-cart";
import getCurrentGasSelected from "../reducers/sceneState/getters/get-current-gas-selected";
import { formatNumber } from "../helpers";
import getRemainingMoneyFromPlayer from "../reducers/entities/player/getters/get-remaining-money-from-player";
import { getGasIsInStockByQuantityBuy } from "../reducers/entities/gases/getters/get-gas-is-in-stock";
import { getHasMaximumQuantityReachedByCountBuy } from "../reducers/sceneState/getters/get-has-maximum-quantity-reached";
import getHasBuyDisabled, {
  getHasBuyDisabledWithParams
} from "../reducers/sceneState/getters/get-has-buy-disabled";

export const getPayment = (countBuy, gasSelected) => {
  const total = formatNumber(countBuy * gasSelected.price);
  const tax = formatNumber((total * gasSelected.tax) / 100);
  const totalTTC = formatNumber(total + tax);

  return {
    total,
    tax,
    totalTTC
  };
};

function buy(countBuy, gasSelected) {
  return eventChannel(emitter => {
    const interval = setInterval(() => {
      countBuy += 1;
      const payment = getPayment(countBuy, gasSelected);

      if (countBuy < 100) {
        emitter({
          countBuy,
          ...payment
        });
      } else {
        emitter(END);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  });
}

let chan;
function* onBuy() {
  const hasBuyDisabled = yield select(getHasBuyDisabled);
  if (hasBuyDisabled) return;

  const countBuy = yield select(selectCountBuy);
  const currentGasSelected = yield select(getCurrentGasSelected);
  const remainingMoney = yield select(getRemainingMoneyFromPlayer);

  chan = yield call(buy, countBuy, currentGasSelected);
  try {
    while (true) {
      let newShoppingCart = yield take(chan);
      const newRemainingMoney = remainingMoney - newShoppingCart.totalTTC;
      const newHasNoEnoughMoney = yield select(state =>
        getHasNoEnoughMoneyByRemainingMoney(state, newRemainingMoney)
      );
      const newGasIsInStock = yield select(state =>
        getGasIsInStockByQuantityBuy(state, newShoppingCart.countBuy)
      );
      const newHasMaximumQuantityReached = yield select(state =>
        getHasMaximumQuantityReachedByCountBuy(state, newShoppingCart.countBuy)
      );
      if (
        getHasBuyDisabledWithParams(
          newHasNoEnoughMoney,
          newGasIsInStock,
          newHasMaximumQuantityReached
        )
      ) {
        chan.close();
      }
      yield put(updateShoppingCart(newShoppingCart));
    }
  } finally {
    if (yield cancelled()) {
      console.log("countBuy cancelled");
      if (!chan) return;

      chan.close();
    }
  }
}

function* stopBuySaga() {
  if (chan) {
    chan.close();
  }
}

export default function* root() {
  yield takeEvery(ON_BUY, onBuy);
  yield takeEvery(STOP_BUY, stopBuySaga);
}
