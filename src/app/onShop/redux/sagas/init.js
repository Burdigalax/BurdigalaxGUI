import { put } from "redux-saga/effects";
import { mergeDeepRight } from "ramda";

import { setConfig } from "../actions/config";
import { getPlayerSuccess } from "../actions/player";
import { getArticlesSuccess } from "../actions/shop";
import { getEffectsSuccess } from "../actions/effects";
import fixturesShop from "../reducers/config/fixturesShop";

export const initShop = function*({ module }) {
  const moduleMerged = mergeDeepRight(fixturesShop, module);
  yield put(setConfig(moduleMerged.config));
  yield put(getPlayerSuccess(moduleMerged.player));
  yield put(getArticlesSuccess(moduleMerged.shop));
  yield put(getEffectsSuccess(moduleMerged.effects));
};
