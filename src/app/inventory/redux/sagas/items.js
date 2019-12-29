import { select, takeEvery, takeLatest } from "redux-saga/effects";

import {
  ON_EQUIP_ITEM,
  ON_USE_ITEM,
  ON_DELETE_ITEM,
  ON_TRANSFER_ITEM
} from "../actions/items";
import { LUA_FUNCTIONS } from "../../events";
import selectItemFromInventoryById from "../reducers/entities/inventory/selectors/select-item-from-inventory-by-id";
import selectIdFromInventory from "../reducers/entities/inventory/selectors/select-id-from-inventory";
import selectItemFromNearbyInventoriesByIdItemAndIdInventory from "../reducers/entities/nearbyInventories/selectors/select-item-from-nearby-inventories-by-id-item-and-id-inventory";

function* onEquip({ data: { idInventory, idItem, isEquipped } }) {
  const currentInventoryId = yield select(selectIdFromInventory);
  if (currentInventoryId === idInventory) {
    LUA_FUNCTIONS.onEquip({ idInventory, idItem, isEquipped });
  }
}

function* onUse({ data: { idInventory, idItem, quantity } }) {
  const currentInventoryId = yield select(selectIdFromInventory);

  if (currentInventoryId === idInventory) {
    LUA_FUNCTIONS.onUse({ idInventory, idItem, newQuantity: quantity - 1 });
  }
}

function* onDelete({ data: { idInventory, idItem, quantity } }) {
  const currentInventoryId = yield select(selectIdFromInventory);
  if (currentInventoryId === idInventory) {
    const { quantity: nowQuantity } = yield select(state =>
      selectItemFromInventoryById(state, idItem)
    );
    LUA_FUNCTIONS.onDelete({
      idInventory,
      idItem,
      quantity,
      newQuantity: nowQuantity - quantity
    });
  }
}

function* onTransfer({
  data: { originInventoryId, destinationInventoryId, idItem, quantity }
}) {
  const currentInventoryId = yield select(selectIdFromInventory);
  if (currentInventoryId === originInventoryId) {
    const { quantity: nowQuantityOrigin } = yield select(state =>
      selectItemFromInventoryById(state, idItem)
    );

    const itemNearbyInventories = yield select(state =>
      selectItemFromNearbyInventoriesByIdItemAndIdInventory(
        state,
        idItem,
        destinationInventoryId
      )
    );

    console.log("itemNearby", itemNearbyInventories);
    const { quantity: nowQuantityDestination = 0 } = itemNearbyInventories;

    console.log(
      "quantity",
      quantity,
      nowQuantityDestination,
      nowQuantityOrigin
    );

    LUA_FUNCTIONS.onTransfer({
      originInventoryId,
      destinationInventoryId,
      idItem,
      quantity,
      newQuantityOrigin: nowQuantityOrigin - quantity,
      newQuantityDestination: nowQuantityDestination + quantity
    });
  }
}

export default function*() {
  yield takeEvery(ON_EQUIP_ITEM, onEquip);
  yield takeLatest(ON_USE_ITEM, onUse);
  yield takeEvery(ON_DELETE_ITEM, onDelete);
  yield takeEvery(ON_TRANSFER_ITEM, onTransfer);
}
