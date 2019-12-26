import { put } from "redux-saga/effects";

import { initialState } from "../../../redux/reducers/actions/config";
import { path } from "ramda";
import fixturesGasStation from "./fixtures/gasStation";

export default function*() {
  yield put(
    initialState({ style: path(["config", "style"], fixturesGasStation) })
  );
}
