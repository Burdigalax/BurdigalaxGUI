import { put, select, takeEvery } from "redux-saga/effects";
import { pathOr } from "ramda";

import { SET_GAS_SELECTED_ID } from "../actions/gases";
import { setPlayer } from "../actions/player";
import selectPlayer from "../reducers/entities/selectors/select-player";
import getRemainingMoney from "../reducers/entities/player/getters/get-remaining-money-from-player";
import selectCountBuy from "../reducers/sceneState/selectors/select-count-buy";

function* changeGasSelected() {
  const player = yield select(selectPlayer);
  const remainingMoney = yield select(getRemainingMoney);
  const countBuy = yield select(selectCountBuy);
  const initFuelValue = pathOr(0, ["car", "fuelValue"], player);

  yield put(
    setPlayer({
      ...player,
      money: remainingMoney,
      car: {
        ...player.car,
        fuelValue: countBuy + initFuelValue
      }
    })
  );
}

export default function* root() {
  yield takeEvery(SET_GAS_SELECTED_ID, changeGasSelected);
}
