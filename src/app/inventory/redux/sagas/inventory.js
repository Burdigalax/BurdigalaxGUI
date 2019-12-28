import { call, put, select, takeEvery } from "redux-saga/effects";
import { pathOr, find, propEq, includes } from "ramda";

import {
  SET_INVENTORY,
  UPDATE_INVENTORY,
  UPDATE_ITEMS_INVENTORY
} from "../actions/inventory";
import selectSelectedItemId from "../reducers/sceneState/selectors/select-selected-item-id";
import { setItemSelectedId } from "../actions/items";
import { setNearbyInventorySelectedId } from "../actions/nearbyInventories";
import selectNearbyInventoriesIds from "../reducers/entities/inventory/selectors/select-nearby-inventories-ids";

function* checkIfResetSelectedItem(itemsUpdated = []) {
  const selectedItemId = yield select(selectSelectedItemId);
  const updatedSelectedItem = find(propEq("id", selectedItemId), itemsUpdated);
  if (updatedSelectedItem && updatedSelectedItem.quantity <= 0) {
    yield put(setItemSelectedId(null));
  }
}

function* checkNearbyInventoriesSelected(inventory = {}) {
  const { selectedNearbyInventoryId } = inventory;
  const nearbyInventoriesIds = yield select(selectNearbyInventoriesIds);

  if (
    selectedNearbyInventoryId &&
    includes(selectedNearbyInventoryId, nearbyInventoriesIds)
  )
    yield put(setNearbyInventorySelectedId(selectedNearbyInventoryId));
}

function* updateInventory({ inventory }) {
  const items = pathOr([], ["items"], inventory);
  yield call(checkIfResetSelectedItem, items);

  yield call(checkNearbyInventoriesSelected, inventory);
}

function* updateItemsInventory({ items = [] }) {
  yield call(checkIfResetSelectedItem, items);
}

function* setInventory({ inventory }) {
  yield call(checkNearbyInventoriesSelected, inventory);
}

export default function*() {
  yield takeEvery(SET_INVENTORY, setInventory);
  yield takeEvery(UPDATE_INVENTORY, updateInventory);
  yield takeEvery(UPDATE_ITEMS_INVENTORY, updateItemsInventory);
}
