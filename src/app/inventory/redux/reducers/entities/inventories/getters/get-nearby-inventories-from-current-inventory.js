import { filter, includes, pathOr, values } from "ramda";

import selectInventories from "../selectors/select-inventories";
import getCurrentInventory from "./get-current-inventory";

export default state => {
  const currentInventory = getCurrentInventory(state);
  const nearbyInventoriesIds = pathOr(
    [],
    ["nearbyInventoriesIds"],
    currentInventory
  );

  const inventories = values(selectInventories(state));

  return filter(
    inventory => includes(inventory.id, nearbyInventoriesIds),
    inventories
  );
};
