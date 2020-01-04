export const prefix = "BURDIGALAX_inventory";

export const setConfig = "setConfig";
export const updateItems = "updateItems";
export const updateInventories = "updateInventories";
export const updateItemsInventories = "updateItemsInventories";
export const transferItem = "transferItem";

export const onClose = "BURDIGALAX_inventory_onClose";
export const onUse = "BURDIGALAX_inventory_onUse";
export const onEquip = "BURDIGALAX_inventory_onEquip";
export const onDelete = "BURDIGALAX_inventory_onDelete";
export const onTransfer = "BURDIGALAX_inventory_onTransfer";
export const onChangeNearbyInventorySelected =
  "BURDIGALAX_inventory_onChangeNearbyInventorySelected";

export const JS_FUNCTIONS = {
  prefix,
  setConfig,
  updateItems,
  updateInventories,
  updateItemsInventories,
  transferItem
};

const callEvent = (name, value) => {
  console.log("callEvent :", name, value);
  try {
    ue.game.callevent(name, JSON.stringify(value));
  } catch (e) {
    //console.warn(e);
    const event = new CustomEvent(name, {
      detail: {
        ...value
      }
    });
    window.dispatchEvent(event);
  }
};

export const LUA_FUNCTIONS = {
  onClose: context => callEvent(onClose, context),
  onEquip: data => callEvent(onEquip, data),
  onUse: data => callEvent(onUse, data),
  onDelete: data => callEvent(onDelete, data),
  onTransfer: data => callEvent(onTransfer, data),
  onChangeNearbyInventorySelected: data =>
    callEvent(onChangeNearbyInventorySelected, data)
};
