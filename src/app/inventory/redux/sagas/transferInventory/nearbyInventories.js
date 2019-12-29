import { put, select, takeEvery } from "redux-saga/effects";

import { SET_NEARBY_INVENTORY_SELECTED_ID } from "../../actions/nearbyInventories";
import selectCurrentContext from "../../reducers/sceneState/selectors/select-current-context";
import { CONTEXT_TYPE, setCurrentInventoryId } from "../../actions/inventory";
import { setItemSelectedId } from "../../actions/items";
import { setNearbyInventorySelectedId as setNearbyInventorySelectedAction } from "../../actions/nearbyInventories";
import selectInventoryById from "../../reducers/entities/inventories/selectors/select-inventory-by-id";

function* setNearbyInventorySelected({ id, originContext }) {
  const context = yield select(selectCurrentContext);
  if (
    context === CONTEXT_TYPE.transferInventory &&
    originContext !== CONTEXT_TYPE.transferInventory
  ) {
    yield put(setCurrentInventoryId(id));
    yield put(setItemSelectedId(null));
    const nearbyInventory = yield select(state =>
      selectInventoryById(state, id)
    );

    if (nearbyInventory) {
      yield put(
        setNearbyInventorySelectedAction(
          nearbyInventory.selectedNearbyInventoryId,
          context
        )
      );
    }
  }
}

export default function*() {
  yield takeEvery(SET_NEARBY_INVENTORY_SELECTED_ID, setNearbyInventorySelected);
}
