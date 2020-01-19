import { put, select, takeEvery } from "redux-saga/effects";
import { resetShoppingCart } from "../actions/shopping-cart";
import { SET_GAS_SELECTED_ID } from "../actions/gases";
import { UPDATE_PLAYER } from "../actions/player";
import { SET_PAYMENT_ERROR } from "../actions/payment";
import getCarIsCompatibleWithGas from "../reducers/entities/player/getters/get-car-is-compatible-with-gas";
import { setPaymentError, setCanUpdatePayment } from "../actions/payment";
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

function* updatePlayer() {
  yield put(setCanUpdatePayment(false));
  yield put(resetShoppingCart());
}

function* paymentError() {
  yield put(setCanUpdatePayment(true));
  yield put(resetShoppingCart());
}

export default function* root() {
  yield takeEvery(SET_GAS_SELECTED_ID, changeGasSelected);
  yield takeEvery(UPDATE_PLAYER, updatePlayer);
  yield takeEvery(SET_PAYMENT_ERROR, paymentError);
}
