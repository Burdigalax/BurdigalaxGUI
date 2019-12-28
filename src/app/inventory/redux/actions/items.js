export const SET_ITEM_SELECTED_ID = "SET_ITEM_SELECTED_ID";
export const SET_ITEMS = "SET_ITEMS";
export const UPDATE_ITEMS = "SET_ITEMS";
export const ON_USE_ITEM = "ON_USE_ITEM";
export const ON_EQUIP_ITEM = "ON_EQUIP_ITEM";
export const ON_DELETE_ITEM = "ON_DELETE_ITEM";

export const setItemSelectedId = id => ({
  type: SET_ITEM_SELECTED_ID,
  id
});

export const setItems = items => ({
  type: SET_ITEMS,
  items
});

export const updateItems = items => ({
  type: UPDATE_ITEMS,
  items
});

export const onUseItem = (id, quantity) => ({
  type: ON_USE_ITEM,
  id,
  quantity
});

export const onEquipItem = (id, isEquipped) => ({
  type: ON_EQUIP_ITEM,
  id,
  isEquipped
});

export const onDeleteItem = (id, quantity) => ({
  type: ON_DELETE_ITEM,
  id,
  quantity
});
