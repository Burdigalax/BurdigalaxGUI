import { put } from "redux-saga/effects";
import { mergeDeepRight } from "ramda";

import { setGases } from "../actions/gases";
import fixturesGasStation from "./fixtures/gasStation";
import { setPlayer } from "../actions/player";
import { setStation } from "../actions/station";
import { setConfig } from "../../../redux/reducers/actions/config";

export const initModule = function*({ module = {} }) {
  const moduleMerged = mergeDeepRight(fixturesGasStation, module);

  if (moduleMerged.gases) yield put(setGases(moduleMerged.gases));
  if (moduleMerged.player) yield put(setPlayer(moduleMerged.player));
  if (moduleMerged.config) yield put(setConfig(moduleMerged.config));
  if (moduleMerged.station) yield put(setStation(moduleMerged.station));
};
