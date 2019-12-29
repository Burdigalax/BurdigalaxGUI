export const SET_CURRENT_CONTEXT = "SET_CURRENT_CONTEXT";
export const SET_MAIN_INVENTORY_ID = "SET_MAIN_INVENTORY_ID";
export const SET_CURRENT_INVENTORY_ID = "SET_CURRENT_INVENTORY_ID";

export const CONTEXT_TYPE = {
  transferInventory: "transfer",
  mainInventory: "main"
};

export const setMainInventoryId = id => ({
  type: SET_MAIN_INVENTORY_ID,
  id
});

export const setCurrentContext = context => ({
  type: SET_CURRENT_CONTEXT,
  context
});

export const setCurrentInventoryId = id => ({
  type: SET_CURRENT_INVENTORY_ID,
  id
});
