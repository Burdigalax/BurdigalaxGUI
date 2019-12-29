export const UPDATE_ITEMS_INVENTORIES_SUCCESS =
  "UPDATE_ITEMS_INVENTORIES_SUCCESS";
export const UPDATE_ITEMS_INVENTORIES_REQUEST =
  "UPDATE_ITEMS_INVENTORIES_REQUEST";
export const SET_INVENTORIES = "SET_INVENTORIES";

export const setInventories = (inventories, mainInventoryId) => ({
  type: SET_INVENTORIES,
  inventories,
  mainInventoryId
});

export const updateItemsInventoriesSuccess = (idInventory, items) => ({
  type: UPDATE_ITEMS_INVENTORIES_SUCCESS,
  idInventory,
  items
});

export const updateItemsInventoriesRequest = (idInventory, items) => ({
  type: UPDATE_ITEMS_INVENTORIES_REQUEST,
  idInventory,
  items
});
