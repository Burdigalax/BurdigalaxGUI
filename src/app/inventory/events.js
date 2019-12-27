export const prefix = "BURDIGALAX_inventory";

export const setConfig = "setConfig";
export const updateItems = "updateItems";
export const updateInventory = "updateInventory";

export const onClose = "BURDIGALAX_inventory_onClose";
export const onUse = "BURDIGALAX_inventory_onUse";
export const onEquip = "BURDGIALAX_inventory_onEquip";
export const onDelete = "BURDIGALAX_inventory_onDelete";
export const onTransfer = "BURDGIGALAX_inventory_onTransfer";

export const JS_FUNCTIONS = {
  prefix,
  setConfig,
  updateItems,
  updateInventory
};

const callEvent = (name, value) => {
  console.log("callEvent :", name, value);
  try {
    ue.game.callevent(name, JSON.stringify(value));
  } catch (e) {
    //console.warn(e);
  }
};

export const LUA_FUNCTIONS = {
  onClose: () => callEvent(onClose),
  onEquip: () => callEvent(onEquip),
  onUse: () => callEvent(onUse),
  onDelete: () => callEvent(onDelete),
  onTransfer: () => callEvent(onTransfer)
};
