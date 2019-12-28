import { map, mergeDeepWith, mergeAll } from "ramda";

import {
  SET_NEARBY_INVENTORIES,
  UPDATE_NEARBY_INVENTORIES
} from "../../../actions/nearbyInventories";

const INITIAL_STATE = {};

const getById = nearbyInventories =>
  mergeAll(
    map(
      nearbyInventory => ({
        [`${nearbyInventory.id}`]: nearbyInventory
      }),
      nearbyInventories
    )
  );

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NEARBY_INVENTORIES:
      const nearbyInventoriesByIds = getById(action.nearbyInventories);
      return {
        byId: nearbyInventoriesByIds
      };
    case UPDATE_NEARBY_INVENTORIES:
      const nearbyInventoriesUpdated = action.nearbyInventories;
      const nearbyInventoriesUpdatedByIds = {
        byId: getById(nearbyInventoriesUpdated)
      };
      return mergeDeepWith(
        (a, b) => b || a,
        state,
        nearbyInventoriesUpdatedByIds
      );
    default:
      return state;
  }
};
