import { fork, all, takeEvery, put } from "redux-saga/effects";

import { INIT_MODULE } from "../../actions/init";
import { setCategories } from "../../actions/categories";
import inventoriesSaga from "../inventories";
import nearbyInventoriesSaga from "../nearbyInventories";
import { setMainInventoryId } from "../../actions/inventory";
import itemsSaga from "../items";
import initSaga from "../init";
import { concat, mergeDeepRight, path, pathOr } from "ramda";
import fixturesInventory from "../fixtures";

function* initTransferInventory({ module }) {
  const moduleMerged = mergeDeepRight(fixturesInventory, module);

  const nameAllCategory = path(
    ["config", "wording", "nameAllCategory"],
    moduleMerged
  );
  const iconUrlAllCategory = path(
    ["config", "iconUrlAllCategory"],
    moduleMerged
  );

  const categories = concat(
    [
      {
        id: "all",
        name: nameAllCategory,
        iconUrl: iconUrlAllCategory
      }
    ],
    module.categories
  );

  yield put(setCategories(categories));
  yield put(setMainInventoryId(module.mainInventoryId));
}

export default function* root() {
  yield all([
    fork(nearbyInventoriesSaga),
    fork(inventoriesSaga),
    fork(itemsSaga),
    fork(initSaga)
  ]);
  yield takeEvery(INIT_MODULE, initTransferInventory);
}
