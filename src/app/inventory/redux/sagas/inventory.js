import { call, put, select, takeEvery } from "redux-saga/effects";
import { pathOr, find, propEq, includes } from "ramda";

import {
  CONTEXT_TYPE,
  SET_INVENTORY,
  UPDATE_INVENTORY,
  UPDATE_ITEMS_INVENTORY_REQUEST,
  updateItemsInventorySuccess
} from "../actions/inventory";
import selectSelectedItemId from "../reducers/sceneState/selectors/select-selected-item-id";
import { setItemSelectedId } from "../actions/items";
import { setNearbyInventorySelectedId } from "../actions/nearbyInventories";
import selectNearbyInventoriesIds from "../reducers/entities/inventory/selectors/select-nearby-inventories-ids";
import selectIdFromInventory from "../reducers/entities/inventory/selectors/select-id-from-inventory";
import selectCurrentContext from "../reducers/sceneState/selectors/select-current-context";
import { updateItemsNearbyInventoriesByIdInventory } from "../actions/nearbyInventories";

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
  const context = yield select(selectCurrentContext);

  if (
    selectedNearbyInventoryId &&
    includes(selectedNearbyInventoryId, nearbyInventoriesIds)
  )
    yield put(setNearbyInventorySelectedId(selectedNearbyInventoryId, context));
}

function* updateInventory({ idInventory, inventory }) {
  console.log("NOT IMPLEMENTED");
  /*
  const items = pathOr([], ["items"], inventory);
  yield call(checkIfResetSelectedItem, items);

  yield call(checkNearbyInventoriesSelected, inventory);
  */
}

function* updateItemsInventoryRequest({ idInventory, items = [] }) {
  const currentInventoryId = yield select(selectIdFromInventory);
  if (currentInventoryId === idInventory) {
    yield call(checkIfResetSelectedItem, items);
    yield put(updateItemsInventorySuccess(items));
  } else {
    yield put(updateItemsNearbyInventoriesByIdInventory(idInventory, items));
  }
}

function* setInventory({ inventory }) {
  yield call(checkNearbyInventoriesSelected, inventory);
}

export default function*() {
  yield takeEvery(SET_INVENTORY, setInventory);
  yield takeEvery(UPDATE_INVENTORY, updateInventory);
  yield takeEvery(UPDATE_ITEMS_INVENTORY_REQUEST, updateItemsInventoryRequest);
}
