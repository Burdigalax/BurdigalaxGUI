import { includes, filter, values } from "ramda";

import selectNearbyInventoriesIdsFromInventory from "../selectors/select-nearby-inventories-ids";
import selectNearbyInventories from "../../nearbyInventories/selectors/select-nearby-inventories";

export default state => {
  const nearbyInventoriesIds = selectNearbyInventoriesIdsFromInventory(state);
  const nearbyInventories = values(selectNearbyInventories(state));

  return filter(
    nearbyInventory => includes(nearbyInventory.id, nearbyInventoriesIds),
    nearbyInventories
  );
};
