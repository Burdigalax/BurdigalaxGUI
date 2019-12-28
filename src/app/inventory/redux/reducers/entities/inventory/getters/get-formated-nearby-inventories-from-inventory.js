import { map } from "ramda";

import getNearbyInventoriesFromInventory from "./get-nearby-inventories-from-inventory";

export default state => {
  const nearbyInventoriesFromInventory = getNearbyInventoriesFromInventory(
    state
  );

  return map(inventory => {
    const { id, shortName, name } = inventory;
    return {
      id,
      name: shortName || name
    };
  }, nearbyInventoriesFromInventory);
};
