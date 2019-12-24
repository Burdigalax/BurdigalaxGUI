import { put } from "redux-saga/effects";
import { mergeDeepRight } from "ramda";

import { setGases } from "../actions/gases";
import fixturesGasStation from "./fixtures/gasStation";
import { setPlayer } from "../actions/player";

export const initModule = function*({ module = {} }) {
  const moduleMerged = mergeDeepRight(fixturesGasStation, module);

  yield put(setGases(moduleMerged.gases));
  yield put(setPlayer(moduleMerged.player));
};
