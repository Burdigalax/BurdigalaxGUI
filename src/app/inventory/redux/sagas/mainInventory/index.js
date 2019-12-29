import { fork, all, takeEvery, put } from "redux-saga/effects";
import { concat } from "ramda";

import { INIT_MODULE } from "../../actions/init";
import { setInventory } from "../../actions/inventory";
import { setItems } from "../../actions/items";
import { setCategories } from "../../actions/categories";
import { setNearbyInventories } from "../../actions/nearbyInventories";
import { setInventories } from "../../actions/inventories";
import { setEffects } from "../../actions/effects";
import inventorySaga from "../inventory";
import nearbyInventoriesSaga from "./nearbyInventories";
import itemsSaga from "../items";

function* init({ module }) {
  //const moduleMerged = mergeDeepRight(fixturesShop, module);
  //yield put(setConfig(module.config));
  const categories = concat(
    [
      {
        id: "equipped",
        name: "Objet(s) équipé(s)",
        iconUrl:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Ctitle%3Eicon-filter-equip%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 2c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z' fill='%23000'/%3E%3C/svg%3E"
      }
    ],
    module.categories
  );

  yield put(setCategories(categories));
  yield put(setEffects(module.effects));
  yield put(setItems(module.items));
  yield put(setInventories(module.inventories));
  yield put(setNearbyInventories(module.nearbyInventories));

  yield put(setInventory(module.inventory));
}

export default function* root() {
  yield all([
    fork(inventorySaga),
    fork(nearbyInventoriesSaga),
    fork(itemsSaga)
  ]);
  yield takeEvery(INIT_MODULE, init);
}
