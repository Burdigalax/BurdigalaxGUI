import { call, put, select, takeEvery } from "redux-saga/effects";
import { find, propEq } from "ramda";

import {
  UPDATE_INVENTORIES_REQUEST,
  UPDATE_ITEMS_INVENTORIES_REQUEST,
  updateInventoriesSuccess,
  updateItemsInventoriesSuccess
} from "../actions/inventories";
import selectSelectedItemId from "../reducers/sceneState/selectors/select-selected-item-id";
import { setItemSelectedId } from "../actions/items";
import selectCurrentInventoryId from "../reducers/sceneState/selectors/select-current-inventory-id";
import selectMainInventoryId from "../reducers/sceneState/selectors/select-main-inventory-id";
import selectCurrentContext from "../reducers/sceneState/selectors/select-current-context";
import { CONTEXT_TYPE } from "../actions/inventory";
import { setNearbyInventorySelectedId } from "../actions/nearbyInventories";

function* checkIfResetSelectedItem(itemsUpdated = []) {
  const selectedItemId = yield select(selectSelectedItemId);
  const updatedSelectedItem = find(propEq("id", selectedItemId), itemsUpdated);
  if (updatedSelectedItem && updatedSelectedItem.quantity <= 0) {
    yield put(setItemSelectedId(null));
  }
}

function* updateItemsInventories({ idInventory, items = [] }) {
  const currentInventoryId = yield select(selectCurrentInventoryId);
  if (currentInventoryId === idInventory) {
    yield call(checkIfResetSelectedItem, items);
  }
  yield put(updateItemsInventoriesSuccess(idInventory, items));
}

function* updateInventoriesRequest({ inventories }) {
  const context = yield select(selectCurrentContext);

  if (context === CONTEXT_TYPE.mainInventory) {
    const mainInventoryId = yield select(selectMainInventoryId);
    const mainInventoryUpdate = find(
      propEq("id", mainInventoryId),
      inventories
    );
    if (
      mainInventoryUpdate &&
      mainInventoryUpdate.selectedNearbyInventoryId !== undefined
    ) {
      yield put(
        setNearbyInventorySelectedId(
          mainInventoryId,
          mainInventoryUpdate.selectedNearbyInventoryId
        )
      );
    }
    yield put(updateInventoriesSuccess(inventories, mainInventoryId));
  }
}

export default function*() {
  yield takeEvery(UPDATE_ITEMS_INVENTORIES_REQUEST, updateItemsInventories);
  yield takeEvery(UPDATE_INVENTORIES_REQUEST, updateInventoriesRequest);
}
