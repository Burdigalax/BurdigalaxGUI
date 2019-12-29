import { put, select, takeEvery } from "redux-saga/effects";
import { find, values, propEq } from "ramda";

import { SET_NEARBY_INVENTORY_SELECTED_ID } from "../../actions/nearbyInventories";
import selectCurrentContext from "../../reducers/sceneState/selectors/select-current-context";
import { CONTEXT_TYPE, setInventory } from "../../actions/inventory";
import selectNearbyInventories from "../../reducers/entities/nearbyInventories/selectors/select-nearby-inventories";
import { setItemSelectedId } from "../../actions/items";
import selectMainInventoryId from "../../reducers/sceneState/selectors/select-main-inventory-id";

function* setNearbyInventorySelected({ id, originContext }) {
  const context = yield select(selectCurrentContext);
  if (
    context === CONTEXT_TYPE.transferInventory &&
    originContext !== CONTEXT_TYPE.transferInventory
  ) {
    const nearbyInventories = yield select(selectNearbyInventories);
    const mainInventoryId = yield select(selectMainInventoryId);

    const transferInventory =
      find(propEq("id", id), values(nearbyInventories)) || {};

    yield put(
      setInventory({
        ...transferInventory,
        items: values(transferInventory.items),
        nearbyInventoriesIds: [mainInventoryId],
        selectedNearbyInventoryId: mainInventoryId
      })
    );
    yield put(setItemSelectedId(null));
  }
}

export default function*() {
  yield takeEvery(SET_NEARBY_INVENTORY_SELECTED_ID, setNearbyInventorySelected);
}
