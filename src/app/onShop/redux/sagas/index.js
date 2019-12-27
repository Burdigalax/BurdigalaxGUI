import { fork, all, takeEvery } from "redux-saga/effects";

import shoppingCartSaga from "./shopping-cart";
import { INIT_SHOP } from "../actions/init";
import { initShop as initShopSaga } from "./init";
import configSaga from "./config";

export default function* root() {
  yield all([fork(shoppingCartSaga), fork(configSaga)]);
  yield takeEvery(INIT_SHOP, initShopSaga);
}
