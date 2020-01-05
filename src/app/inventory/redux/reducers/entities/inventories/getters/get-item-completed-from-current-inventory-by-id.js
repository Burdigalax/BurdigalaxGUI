import { pathOr } from "ramda";

import getItemFromCurrentInventoryById from "./get-item-from-current-inventory-by-id";
import selectItemById from "../../items/selectors/select-items-by-id";

const formatNumber = value => parseFloat(value.toFixed(2));

export default (state, id) => {
  const itemInventory = getItemFromCurrentInventoryById(state, id);
  const item = selectItemById(state, id);
  const quantity = pathOr(0, ["quantity"], itemInventory);
  const weight = pathOr(0, ["weight"], item);
  return {
    ...item,
    ...itemInventory,
    totalWeight: formatNumber(quantity * weight)
  };
};
