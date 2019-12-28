import { keys } from "ramda";

import selectItemsFromInventory from "../selectors/select-items-from-inventory";

export default state => {
  const items = selectItemsFromInventory(state);
  return keys(items);
};
