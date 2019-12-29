import { fork, all, takeEvery, put } from "redux-saga/effects";
import { concat, path } from "ramda";

import { INIT_MODULE } from "../../actions/init";
import { setItems } from "../../actions/items";
import { setCategories } from "../../actions/categories";
import { setNearbyInventories } from "../../actions/nearbyInventories";
import { setEffects } from "../../actions/effects";
import inventorySaga from "../inventory";
import nearbyInventoriesSaga from "./nearbyInventories";
import { setMainInventoryId } from "../../actions/inventory";
import itemsSaga from "../items";
import { setInventories } from "../../actions/inventories";

function* init({ module }) {
  yield put(setCategories(module.categories));
  yield put(setEffects(module.effects));
  yield put(setItems(module.items));
  yield put(setInventories(module.inventories));

  yield put(
    setNearbyInventories(concat([module.inventory], module.nearbyInventories))
  );
  yield put(setMainInventoryId(path(["inventory", "id"], module)));
}

export default function* root() {
  yield all([
    fork(nearbyInventoriesSaga),
    fork(inventorySaga),
    fork(itemsSaga)
  ]);
  yield takeEvery(INIT_MODULE, init);
}
