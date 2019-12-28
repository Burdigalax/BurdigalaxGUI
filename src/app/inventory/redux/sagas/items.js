import { select, takeEvery } from "redux-saga/effects";

import { ON_EQUIP_ITEM, ON_USE_ITEM, ON_DELETE_ITEM } from "../actions/items";
import { LUA_FUNCTIONS } from "../../events";
import selectItemFromInventoryById from "../reducers/entities/inventory/selectors/select-item-from-inventory-by-id";

function* onEquip({ id, isEquipped }) {
  LUA_FUNCTIONS.onEquip({ id, isEquipped });
}

function* onUse({ id, quantity }) {
  LUA_FUNCTIONS.onUse({ id, newQuantity: quantity - 1 });
}

function* onDelete({ id, quantity }) {
  const { quantity: nowQuantity } = yield select(state =>
    selectItemFromInventoryById(state, id)
  );
  LUA_FUNCTIONS.onDelete({ id, quantity, newQuantity: nowQuantity - quantity });
}

export default function*() {
  yield takeEvery(ON_EQUIP_ITEM, onEquip);
  yield takeEvery(ON_USE_ITEM, onUse);
  yield takeEvery(ON_DELETE_ITEM, onDelete);
}
