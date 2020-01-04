import { map } from "ramda";

import getNearbyInventoriesFromCurrentInventory from "./get-nearby-inventories-from-current-inventory";

export default state => {
  const nearbyInventoriesFromCurrentInventory = getNearbyInventoriesFromCurrentInventory(
    state
  );

  return map(inventory => {
    const { id, selectName, name } = inventory;
    return {
      id,
      name: selectName || name
    };
  }, nearbyInventoriesFromCurrentInventory);
};
