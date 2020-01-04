export const UPDATE_ITEMS_INVENTORIES_SUCCESS =
  "UPDATE_ITEMS_INVENTORIES_SUCCESS";
export const UPDATE_ITEMS_INVENTORIES_REQUEST =
  "UPDATE_ITEMS_INVENTORIES_REQUEST";
export const SET_INVENTORIES = "SET_INVENTORIES";
export const UPDATE_INVENTORIES_REQUEST = "UPDATE_INVENTORIES_REQUEST";
export const UPDATE_INVENTORIES_SUCCESS = "UPDATE_INVENTORIES_SUCCESS";

export const setInventories = (inventories, mainInventoryId) => ({
  type: SET_INVENTORIES,
  inventories,
  mainInventoryId
});

export const updateInventoriesSuccess = (inventories, mainInventoryId) => ({
  type: UPDATE_INVENTORIES_SUCCESS,
  inventories,
  mainInventoryId
});

export const updateInventoriesRequest = inventories => ({
  type: UPDATE_INVENTORIES_REQUEST,
  inventories
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
