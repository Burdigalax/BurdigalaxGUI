import {
  map,
  mergeDeepWith,
  mergeAll,
  mergeDeepRight,
  pathOr,
  pipe
} from "ramda";

import {
  SET_NEARBY_INVENTORIES,
  UPDATE_ITEMS_NEARBY_INVENTORY_BY_ID_INVENTORY,
  UPDATE_NEARBY_INVENTORIES
} from "../../../actions/nearbyInventories";

const INITIAL_STATE = {
  byId: {}
};

const getItemsById = (items = []) =>
  pipe(
    map(item => ({
      [`${item.id}`]: item
    })),
    mergeAll
  )(items);

const getById = nearbyInventories =>
  mergeAll(
    map(
      nearbyInventory => ({
        [`${nearbyInventory.id}`]: {
          ...nearbyInventory,
          items: getItemsById(nearbyInventory.items)
        }
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
    case UPDATE_ITEMS_NEARBY_INVENTORY_BY_ID_INVENTORY:
      const inventoryUpdated = state.byId[action.idInventory];
      if (!inventoryUpdated) return state;

      const existingItems = pathOr([], ["items"], inventoryUpdated);
      const itemsUpdatedByIds = getItemsById(action.items);
      const newInventory = getById([
        {
          ...inventoryUpdated,
          items: mergeDeepRight(existingItems, itemsUpdatedByIds)
        }
      ]);

      console.log("newInventory", newInventory);
      const res = {
        byId: mergeDeepWith((a, b) => b || a, state.byId, newInventory)
      };

      console.log("res", res);
      return res;
    default:
      return state;
  }
};
