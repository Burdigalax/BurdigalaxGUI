export const SET_NEARBY_INVENTORY_SELECTED_ID =
  "SET_NEARBY_INVENTORY_SELECTED_ID";

export const setNearbyInventorySelectedId = (
  originInventoryId,
  destinationInventoryId
) => ({
  type: SET_NEARBY_INVENTORY_SELECTED_ID,
  originInventoryId,
  destinationInventoryId
});
