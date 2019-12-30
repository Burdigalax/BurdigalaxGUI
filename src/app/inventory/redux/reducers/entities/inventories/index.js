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
  const nearbyInventoriesIds = pathOr([], ["nearbyInventoriesIds"], inventory);
  if (!mainInventoryId || inventory.id === mainInventoryId)
    return {
      nearbyInventoriesIds: reject(
        id => id === inventory.id,
        nearbyInventoriesIds
      )
    };

  return {
    selectedNearbyInventoryId:
      inventory.selectedNearbyInventoryId || mainInventoryId,
    nearbyInventoriesIds: reject(
      id => id === inventory.id,
      append(mainInventoryId, nearbyInventoriesIds)
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
    case UPDATE_ITEMS_INVENTORIES_SUCCESS:
      const newInventory = getById([
        {
          id: action.idInventory,
          items: action.items
        }
      ]);
      return {
        byId: excludeZeroQuantity(mergeDeepRight(state.byId, newInventory))
      };
    default:
      return state;
  }
};
