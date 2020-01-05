import selectItemById from "../../items/selectors/select-items-by-id";
import { pathOr } from "ramda";

const formatNumber = value => parseFloat(value.toFixed(2));

export const getFormatedItemById = (state, id, itemInventory) => {
  const item = selectItemById(state, id);
  const quantity = pathOr(0, ["quantity"], itemInventory);
  const weight = pathOr(0, ["weight"], item);
  return {
    ...item,
    ...itemInventory,
    totalWeight: formatNumber(quantity * weight)
  };
};
