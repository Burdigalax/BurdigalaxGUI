import { fork, all, takeEvery, put } from "redux-saga/effects";

import { INIT_MODULE } from "../actions/init";
import { mergeDeepRight } from "ramda";
import { setConfig } from "../../../redux/reducers/actions/config";
import { setInventory } from "../actions/inventory";
import { setItems } from "../actions/items";
import { setCategories } from "../actions/categories";
import { setNearbyInventories } from "../actions/nearbyInventories";
import { setEffects } from "../actions/effects";
import inventorySaga from "./inventory";
import itemsSaga from "./items";
import nearbyInventoriesSaga from "./nearbyInventories";
import categoriesSaga from "./categories";

function* init({ module }) {
  //const moduleMerged = mergeDeepRight(fixturesShop, module);
  //yield put(setConfig(module.config));
  yield put(setCategories(module.categories));
  yield put(setEffects(module.effects));
  yield put(setItems(module.items));
  yield put(setNearbyInventories(module.nearbyInventories));
  yield put(setInventory(module.inventory));
}

export default function* root() {
  yield all([
    fork(inventorySaga),
    fork(itemsSaga),
    fork(nearbyInventoriesSaga),
    fork(categoriesSaga)
  ]);
  yield takeEvery(INIT_MODULE, init);
}
