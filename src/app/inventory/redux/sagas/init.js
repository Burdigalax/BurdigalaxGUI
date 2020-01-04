import { put, takeEvery } from "redux-saga/effects";
import { mergeDeepRight, path } from "ramda";

import { INIT_MODULE } from "../actions/init";
import { setEffects } from "../actions/effects";
import { setItems } from "../actions/items";
import { setInventories } from "../actions/inventories";
import { setMainInventoryId } from "../actions/inventory";
import fixturesInventory from "./fixtures";
import { setConfig } from "../../../redux/reducers/actions/config";

function* init({ module }) {
  const moduleMerged = mergeDeepRight(fixturesInventory, module);
  yield put(setConfig(moduleMerged.config));

  yield put(setEffects(module.effects));
  yield put(setItems(module.items));
  yield put(setInventories(module.inventories, module.mainInventoryId));
  yield put(setMainInventoryId(module.mainInventoryId));
}

export default function*() {
  yield takeEvery(INIT_MODULE, init);
}
