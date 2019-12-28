import { pathOr, map } from "ramda";

import selectItemsFromInventory from "../selectors/select-items-from-inventory";
import selectItemById from "../../items/selectors/select-items-by-id";

export default state => {
  const itemsInventory = selectItemsFromInventory(state);
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
