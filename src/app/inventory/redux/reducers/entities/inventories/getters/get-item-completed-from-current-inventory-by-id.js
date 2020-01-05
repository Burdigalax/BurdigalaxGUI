import getItemFromCurrentInventoryById from "./get-item-from-current-inventory-by-id";
import { getFormatedItemById } from "../helpers/";

export default (state, id) => {
  const itemInventory = getItemFromCurrentInventoryById(state, id);
  return getFormatedItemById(state, id, itemInventory);
};
