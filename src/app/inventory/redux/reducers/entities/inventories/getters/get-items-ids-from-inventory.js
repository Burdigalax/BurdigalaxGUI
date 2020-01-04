import { keys } from "ramda";

import getItemsFromCurrentInventory from "./get-items-from-current-inventory";

export default state => {
  const items = getItemsFromCurrentInventory(state);
  return keys(items);
};
