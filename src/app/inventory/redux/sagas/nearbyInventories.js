import { put, select, takeEvery } from "redux-saga/effects";

import { LUA_FUNCTIONS } from "../../events";
import {
  SET_NEARBY_INVENTORY_SELECTED_ID,
  setNearbyInventorySelectedId as setNearbyInventorySelectedAction
} from "../actions/nearbyInventories";
import selectCurrentInventoryId from "../reducers/sceneState/selectors/select-current-inventory-id";
import selectCurrentContext from "../reducers/sceneState/selectors/select-current-context";
import selectMainInventoryId from "../reducers/sceneState/selectors/select-main-inventory-id";
import { CONTEXT_TYPE, setCurrentInventoryId } from "../actions/inventory";
import { setItemSelectedId } from "../actions/items";
import { setCategorySelectedId } from "../actions/categories";
import selectInventoryById from "../reducers/entities/inventories/selectors/select-inventory-by-id";

function* setNearbyInventorySelected({
  originInventoryId,
  destinationInventoryId
}) {
  const currentInventoryId = yield select(selectCurrentInventoryId);
  const mainInventoryId = yield select(selectMainInventoryId);
  const context = yield select(selectCurrentContext);

  if (currentInventoryId === originInventoryId) {
    LUA_FUNCTIONS.onChangeNearbyInventorySelected({
      originInventoryId,
      destinationInventoryId
    });
  }

  if (
    context === CONTEXT_TYPE.transferInventory &&
    mainInventoryId === originInventoryId
  ) {
    yield put(setCurrentInventoryId(destinationInventoryId));
    yield put(setItemSelectedId(null));
    yield put(setCategorySelectedId("all"));
    const nearbyInventory = yield select(state =>
      selectInventoryById(state, destinationInventoryId)
    );

    if (nearbyInventory) {
      yield put(
        setNearbyInventorySelectedAction(
          destinationInventoryId,
          nearbyInventory.selectedNearbyInventoryId
        )
      );
    }
  }
}

export default function*() {
  yield takeEvery(SET_NEARBY_INVENTORY_SELECTED_ID, setNearbyInventorySelected);
}
