import { map } from "ramda";

import getItemsFromCurrentInventory from "./get-items-from-current-inventory";
import { getFormatedItemById } from "../helpers";

export default state => {
  const itemsInventory = getItemsFromCurrentInventory(state);
  return map(itemInventory => {
    return getFormatedItemById(state, itemInventory.id, itemInventory);
  }, itemsInventory);
};
