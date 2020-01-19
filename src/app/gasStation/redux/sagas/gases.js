import { eventChannel } from "redux-saga";
import {
  call,
  cancelled,
  put,
  select,
  take,
  takeEvery,
  takeLatest
} from "redux-saga/effects";

import selectCountBuy from "../reducers/sceneState/selectors/select-count-buy";
import { getHasNoEnoughMoneyByRemainingMoney } from "../reducers/entities/player/getters/get-has-no-enough-money";
import { ON_BUY, STOP_BUY, stopBuy } from "../actions/gases";
import { updateShoppingCart } from "../actions/shopping-cart";
import getCurrentGasSelected from "../reducers/sceneState/getters/get-current-gas-selected";
import { formatNumber } from "../helpers";
import { getGasIsInStockByQuantityBuy } from "../reducers/entities/gases/getters/get-gas-is-in-stock";
import { getHasMaximumQuantityReachedByCountBuy } from "../reducers/sceneState/getters/get-has-maximum-quantity-reached";
import getHasBuyDisabled, {
  getHasBuyDisabledWithParams
} from "../reducers/sceneState/getters/get-has-buy-disabled";
import { LUA_FUNCTIONS } from "../../events";
import selectShoppingCart from "../reducers/sceneState/selectors/select-shopping-cart";
import selectMoneyFromPlayer from "../reducers/entities/player/selectors/select-money-from-player";
import { setCanUpdatePayment } from "../actions/payment";

export const getPayment = (countBuy, gasSelected, initialMoney) => {
  const total = formatNumber(countBuy * gasSelected.price);
  const tax = formatNumber((total * gasSelected.tax) / 100);
  const totalTTC = formatNumber(total + tax);
  const remainingMoney = formatNumber(initialMoney - totalTTC);

  return {
    total,
    tax,
    totalTTC,
    remainingMoney
  };
};

function buy(countBuy, gasSelected, initialMoney) {
  return eventChannel(emitter => {
    const interval = setInterval(() => {
      countBuy += gasSelected.speed || 1;
      const payment = getPayment(countBuy, gasSelected, initialMoney);

      emitter({
        countBuy,
        ...payment,
        gasId: gasSelected.id,
        gasName: gasSelected.name
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  });
}

let chan;
function* onBuy() {
  yield put(setCanUpdatePayment(true));
  const hasBuyDisabled = yield select(getHasBuyDisabled);
  if (hasBuyDisabled) return;

  const countBuy = yield select(selectCountBuy);
  const currentGasSelected = yield select(getCurrentGasSelected);
  const initialMoney = yield select(selectMoneyFromPlayer);

  chan = yield call(buy, countBuy, currentGasSelected, initialMoney);
  try {
    while (true) {
      let newShoppingCart = yield take(chan);
      const newHasNoEnoughMoney = yield select(state =>
        getHasNoEnoughMoneyByRemainingMoney(
          state,
          newShoppingCart.remainingMoney
        )
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
        yield put(stopBuy());
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

  const shoppingCart = yield select(selectShoppingCart);
  LUA_FUNCTIONS.onPayment(shoppingCart);
}

export default function* root() {
  yield takeEvery(ON_BUY, onBuy);
  yield takeLatest(STOP_BUY, stopBuySaga);
}
