import { select, takeEvery, takeLatest } from "redux-saga/effects";

import {
  ON_EQUIP_ITEM,
  ON_USE_ITEM,
  ON_DELETE_ITEM,
  ON_TRANSFER_ITEM
} from "../actions/items";
import { LUA_FUNCTIONS } from "../../events";
import getItemFromCurrentInventoryById from "../../redux/reducers/entities/inventories/getters/get-item-from-current-inventory-by-id";
import selectCurrentInventoryId from "../reducers/sceneState/selectors/select-current-inventory-id";
import selectItemFromInventoriesByIdInventoryAndIdItem from "../reducers/entities/inventories/selectors/select-item-from-inventories-by-id-inventory-and-id-item";

function* onEquip({ data: { idInventory, idItem, isEquipped } }) {
  const currentInventoryId = yield select(selectCurrentInventoryId);
  if (currentInventoryId === idInventory) {
    LUA_FUNCTIONS.onEquip({ idInventory, idItem, isEquipped });
  }
}

function* onUse({ data: { idInventory, idItem, quantity } }) {
  const currentInventoryId = yield select(selectCurrentInventoryId);

  if (currentInventoryId === idInventory) {
    LUA_FUNCTIONS.onUse({ idInventory, idItem, newQuantity: quantity - 1 });
  }
}

function* onDelete({ data: { idInventory, idItem, quantity } }) {
  const currentInventoryId = yield select(selectCurrentInventoryId);
  if (currentInventoryId === idInventory) {
    const { quantity: nowQuantity } = yield select(state =>
      getItemFromCurrentInventoryById(state, idItem)
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
  const currentInventoryId = yield select(selectCurrentInventoryId);
  if (currentInventoryId === originInventoryId) {
    console.log("ON TRANSFER", originInventoryId);

    const { quantity: nowQuantityOrigin } = yield select(state =>
      getItemFromCurrentInventoryById(state, idItem)
    );

    const { quantity: nowQuantityDestination = 0 } = yield select(state =>
      selectItemFromInventoriesByIdInventoryAndIdItem(
        state,
        destinationInventoryId,
        idItem
      )
    );

    const quantityToTransfer = quantity || nowQuantityOrigin;

    LUA_FUNCTIONS.onTransfer({
      originInventoryId,
      destinationInventoryId,
      idItem,
      quantity: quantityToTransfer,
      newQuantityOrigin: nowQuantityOrigin - quantityToTransfer,
      newQuantityDestination: nowQuantityDestination + quantityToTransfer
    });
  }
}

export default function*() {
  yield takeEvery(ON_EQUIP_ITEM, onEquip);
  yield takeLatest(ON_USE_ITEM, onUse);
  yield takeEvery(ON_DELETE_ITEM, onDelete);
  yield takeEvery(ON_TRANSFER_ITEM, onTransfer);
}
