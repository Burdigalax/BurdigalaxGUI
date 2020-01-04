import { pathOr } from "ramda";
import getItemsFromCurrentInventory from "./get-items-from-current-inventory";

const emptyObject = {};
export default (state, id) => {
  const itemInventory = getItemsFromCurrentInventory(state);
  return pathOr(emptyObject, [id], itemInventory);
};
