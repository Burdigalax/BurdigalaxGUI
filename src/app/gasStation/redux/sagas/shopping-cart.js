import { put, select, takeEvery } from "redux-saga/effects";
import selectCountBuy from "../reducers/sceneState/selectors/select-count-buy";
import selectCarFromPlayer from "../reducers/entities/player/selectors/select-car-from-player";
import { pathOr } from "ramda";
import { resetShoppingCart } from "../actions/shopping-cart";
import { SET_GAS_SELECTED_ID } from "../actions/gases";
import { UPDATE_PLAYER } from "../actions/player";
import getCarIsCompatibleWithGas from "../reducers/entities/player/getters/get-car-is-compatible-with-gas";
import { setPaymentError } from "../actions/payment";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";

function* changeGasSelected() {
  const isCarCompatibleWithGas = yield select(getCarIsCompatibleWithGas);
  const wording = yield select(selectWordingFromConfig);
  if (!isCarCompatibleWithGas) {
    yield put(
      setPaymentError({
        title: wording.vehicleIncompatible || "Véhicule incompatible"
      })
    );
  }
  yield put(resetShoppingCart());
}

function* updatePlayer({ player }) {
  const countBuy = yield select(selectCountBuy);
  const { fuelValue, tank } = yield select(selectCarFromPlayer);

  const newFuelValue = pathOr(fuelValue, ["car", "fuelValue"], player);
  const newFuelTank = pathOr(tank, ["car", "tank"], player);

  if (
    newFuelValue + countBuy > newFuelTank ||
    newFuelTank < newFuelValue + countBuy
  ) {
    yield put(resetShoppingCart());
  }
}

export default function* root() {
  yield takeEvery(SET_GAS_SELECTED_ID, changeGasSelected);
  yield takeEvery(UPDATE_PLAYER, updatePlayer);
}
