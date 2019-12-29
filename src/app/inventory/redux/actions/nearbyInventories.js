export const SET_NEARBY_INVENTORIES = "SET_NEARBY_INVENTORIES";
export const UPDATE_NEARBY_INVENTORIES = "UPDATE_NEARBY_INVENTORIES";
export const SET_NEARBY_INVENTORY_SELECTED_ID =
  "SET_NEARBY_INVENTORY_SELECTED_ID";
export const UPDATE_ITEMS_NEARBY_INVENTORY_BY_ID_INVENTORY =
  "UPDATE_ITEMS_NEARBY_INVENTORY_BY_ID_INVENTORY";

export const setNearbyInventories = nearbyInventories => ({
  type: SET_NEARBY_INVENTORIES,
  nearbyInventories
});

export const updateNearbyInventories = nearbyInventories => ({
  type: UPDATE_NEARBY_INVENTORIES,
  nearbyInventories
});

export const setNearbyInventorySelectedId = (id, originContext) => ({
  type: SET_NEARBY_INVENTORY_SELECTED_ID,
  id,
  originContext
});

export const updateItemsNearbyInventoriesByIdInventory = (
  idInventory,
  items
) => ({
  type: UPDATE_ITEMS_NEARBY_INVENTORY_BY_ID_INVENTORY,
  idInventory,
  items
});
