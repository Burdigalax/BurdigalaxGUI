import { call, put, select, takeEvery } from "redux-saga/effects";
import { find, propEq } from "ramda";

import {
  UPDATE_ITEMS_INVENTORIES_REQUEST,
  updateItemsInventoriesSuccess
} from "../actions/inventories";
import selectSelectedItemId from "../reducers/sceneState/selectors/select-selected-item-id";
import { setItemSelectedId } from "../actions/items";
import selectCurrentInventoryId from "../reducers/sceneState/selectors/select-current-inventory-id";

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

export default function*() {
  yield takeEvery(UPDATE_ITEMS_INVENTORIES_REQUEST, updateItemsInventories);
}
