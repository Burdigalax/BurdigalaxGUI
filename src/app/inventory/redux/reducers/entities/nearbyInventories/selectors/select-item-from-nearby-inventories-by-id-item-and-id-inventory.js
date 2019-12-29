import { pathOr, find, propEq, values } from "ramda";

import selectNearbyInventoryById from "./select-nearby-inventory-by-id";

export default (state, idItem, idInventory) => {
  const nearbyInventory = selectNearbyInventoryById(state, idInventory);
  console.log("nearbyInventory", nearbyInventory);
  const items = pathOr([], ["items"], nearbyInventory);
  return find(propEq("id", idItem), items) || {};
};
