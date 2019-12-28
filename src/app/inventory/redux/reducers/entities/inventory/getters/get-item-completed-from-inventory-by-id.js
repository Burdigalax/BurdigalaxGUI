import { pathOr } from "ramda";

import selectItemFromInventoryById from "../selectors/select-item-from-inventory-by-id";
import selectItemById from "../../items/selectors/select-items-by-id";

export default (state, id) => {
  const itemInventory = selectItemFromInventoryById(state, id);
  const item = selectItemById(state, id);
  const quantity = pathOr(0, ["quantity"], itemInventory);
  const weight = pathOr(0, ["weight"], item);
  return {
    ...item,
    ...itemInventory,
    totalWeight: quantity * weight
  };
};
