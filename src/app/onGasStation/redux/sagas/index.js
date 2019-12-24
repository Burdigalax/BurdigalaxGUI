import { fork, all, takeEvery } from "redux-saga/effects";

import configSaga from "./config";
import { INIT_MODULE } from "../actions/init";
import { initModule } from "./init";
import gasesSaga from "./gases";
import playerSaga from "./player";

export default function* root() {
  yield all([fork(configSaga), fork(gasesSaga), fork(playerSaga)]);
  yield takeEvery(INIT_MODULE, initModule);
}
