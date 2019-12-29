import { pathOr, map } from "ramda";

import getItemsFromCurrentInventory from "./get-items-from-current-inventory";
import selectItemById from "../../items/selectors/select-items-by-id";

export default state => {
  const itemsInventory = getItemsFromCurrentInventory(state);
  return map(itemInventory => {
    const item = selectItemById(state, itemInventory.id);
    const quantity = pathOr(0, ["quantity"], itemInventory);
    const weight = pathOr(0, ["weight"], item);

    return {
      ...item,
      ...itemInventory,
      totalWeight: quantity * weight
    };
  }, itemsInventory);
};
