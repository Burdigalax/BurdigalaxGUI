export const SET_INVENTORY = "SET_INVENTORY";
export const UPDATE_INVENTORY = "UPDATE_INVENTORY";
export const UPDATE_ITEMS_INVENTORY_SUCCESS = "UPDATE_ITEMS_INVENTORY_SUCCESS";
export const SET_CURRENT_CONTEXT = "SET_CURRENT_CONTEXT";
export const UPDATE_ITEMS_INVENTORY_REQUEST = "UPDATE_ITEMS_INVENTORY_REQUEST";
export const SET_MAIN_INVENTORY_ID = "SET_MAIN_INVENTORY_ID";

export const CONTEXT_TYPE = {
  transferInventory: "transfer",
  mainInventory: "main"
};

export const setMainInventoryId = id => ({
  type: SET_MAIN_INVENTORY_ID,
  id
});

export const setInventory = inventory => ({
  type: SET_INVENTORY,
  inventory
});

export const updateInventory = inventory => ({
  type: UPDATE_INVENTORY,
  inventory
});

export const updateItemsInventoryRequest = (idInventory, items) => ({
  type: UPDATE_ITEMS_INVENTORY_REQUEST,
  idInventory,
  items
});

export const updateItemsInventorySuccess = items => ({
  type: UPDATE_ITEMS_INVENTORY_SUCCESS,
  items
});

export const setCurrentContext = context => ({
  type: SET_CURRENT_CONTEXT,
  context
});
