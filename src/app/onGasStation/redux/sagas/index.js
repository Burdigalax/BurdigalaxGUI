import { fork, all } from "redux-saga/effects";

import configSaga from "./config";

export default function* root() {
  yield all([fork(configSaga)]);
}
