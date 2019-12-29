import { fork, all, takeEvery, put } from "redux-saga/effects";

import { INIT_MODULE } from "../../actions/init";
import { setCategories } from "../../actions/categories";
import inventoriesSaga from "../inventories";
import nearbyInventoriesSaga from "./nearbyInventories";
import { setMainInventoryId } from "../../actions/inventory";
import itemsSaga from "../items";
import initSaga from "../init";

function* initTransferInventory({ module }) {
  yield put(setCategories(module.categories));
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
