import { put, takeEvery } from "redux-saga/effects";

import { INIT_MODULE } from "../actions/init";
import { concat } from "ramda";
import { setEffects } from "../actions/effects";
import { setItems } from "../actions/items";
import { setInventories } from "../actions/inventories";
import { setMainInventoryId } from "../actions/inventory";

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

  yield put(setEffects(module.effects));
  yield put(setItems(module.items));
  yield put(setInventories(module.inventories, module.mainInventoryId));
  yield put(setMainInventoryId(module.mainInventoryId));
}

export default function*() {
  yield takeEvery(INIT_MODULE, init);
}
