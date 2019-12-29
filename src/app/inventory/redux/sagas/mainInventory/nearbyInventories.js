import { takeEvery } from "redux-saga/effects";

import { LUA_FUNCTIONS } from "../../../events";
import { SET_NEARBY_INVENTORY_SELECTED_ID } from "../../actions/nearbyInventories";

function* setNearbyInventorySelected({ id }) {
  LUA_FUNCTIONS.onChangeNearbyInventorySelected({ id });
}

export default function*() {
  yield takeEvery(SET_NEARBY_INVENTORY_SELECTED_ID, setNearbyInventorySelected);
}
