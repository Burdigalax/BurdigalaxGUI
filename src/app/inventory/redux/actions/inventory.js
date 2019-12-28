export const SET_INVENTORY = "SET_INVENTORY";
export const UPDATE_INVENTORY = "UPDATE_INVENTORY";
export const UPDATE_ITEMS_INVENTORY = "UPDATE_ITEMS_INVENTORY";

export const setInventory = inventory => ({
  type: SET_INVENTORY,
  inventory
});

export const updateInventory = inventory => ({
  type: UPDATE_INVENTORY,
  inventory
});

export const updateItemsInventory = items => ({
  type: UPDATE_ITEMS_INVENTORY,
  items
});
