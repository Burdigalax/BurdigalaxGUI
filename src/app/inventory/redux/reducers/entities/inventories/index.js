import {
  map,
  mergeAll,
  append,
  pathOr,
  mergeDeepRight,
  pipe,
  reject
} from "ramda";

import {
  SET_INVENTORIES,
  UPDATE_ITEMS_INVENTORIES_SUCCESS
} from "../../../actions/inventories";
import { UPDATE_INVENTORIES_SUCCESS } from "../../../actions/inventories";

const INITIAL_STATE = {
  byId: {}
};

const excludeZeroQuantity = inventories => {
  return map(
    inventory => ({
      ...inventory,
      items: {
        byId: reject(item => !item.quantity, inventory.items.byId)
      }
    }),
    inventories
  );
};

const getItemsById = (items = []) =>
  pipe(
    map(item => ({
      [`${item.id}`]: item
    })),
    mergeAll
  )(items);

const overrideNearbyInventoryData = (inventory, mainInventoryId) => {
  if (!mainInventoryId) return null;

  const nearbyInventoriesIds = pathOr([], ["nearbyInventoriesIds"], inventory);
  if (inventory.id === mainInventoryId) {
    if (!inventory.nearbyInventoriesIds) return null;

    return {
      nearbyInventoriesIds: reject(
        id => id === mainInventoryId,
        nearbyInventoriesIds
      )
    };
  }

  return {
    selectedNearbyInventoryId:
      inventory.selectedNearbyInventoryId || mainInventoryId,
    nearbyInventoriesIds: append(
      mainInventoryId,
      reject(id => id === inventory.id, nearbyInventoriesIds)
    )
  };
};

const getById = (inventories, mainInventoryId) =>
  mergeAll(
    map(
      inventory => ({
        [`${inventory.id}`]: {
          ...inventory,
          ...overrideNearbyInventoryData(inventory, mainInventoryId),
          items: { byId: getItemsById(inventory.items) }
        }
      }),
      inventories
    )
  );

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INVENTORIES:
      return {
        byId: excludeZeroQuantity(
          getById(action.inventories, action.mainInventoryId)
        )
      };
    case UPDATE_INVENTORIES_SUCCESS:
      return {
        byId: excludeZeroQuantity(
          mergeDeepRight(
            state.byId,
            getById(action.inventories, action.mainInventoryId)
          )
        )
      };
    case UPDATE_ITEMS_INVENTORIES_SUCCESS:
      const newInventory2 = getById([
        {
          id: action.idInventory,
          items: action.items
        }
      ]);
      return {
        byId: excludeZeroQuantity(mergeDeepRight(state.byId, newInventory2))
      };
    default:
      return state;
  }
};
