import { fork, all, takeEvery } from "redux-saga/effects";

import configSaga from "./config";
import { INIT_MODULE } from "../actions/init";
import { initModule } from "./init";
import gasesSaga from "./gases";
import playerSaga from "./player";
import shoppingCartSaga from "./shopping-cart";

export default function* root() {
  yield all([
    fork(configSaga),
    fork(gasesSaga),
    fork(playerSaga),
    fork(shoppingCartSaga)
  ]);
  yield takeEvery(INIT_MODULE, initModule);
}
