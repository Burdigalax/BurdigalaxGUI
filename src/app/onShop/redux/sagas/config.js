import { put, takeEvery } from "redux-saga/effects";

import { RESET_SUCCESS } from "../actions/reset";
import {
  initialState,
  resetConfig
} from "../../../redux/reducers/actions/config";
import { path } from "ramda";
import fixturesShop from "./fixtures/shop";

function* resetConfigSaga() {
  yield put(resetConfig());
}

export default function*() {
  yield put(initialState({ style: path(["config", "style"], fixturesShop) }));
  yield takeEvery(RESET_SUCCESS, resetConfigSaga);
}
