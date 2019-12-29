export const SET_NEARBY_INVENTORY_SELECTED_ID =
  "SET_NEARBY_INVENTORY_SELECTED_ID";

export const setNearbyInventorySelectedId = (id, originContext) => ({
  type: SET_NEARBY_INVENTORY_SELECTED_ID,
  id,
  originContext
});
