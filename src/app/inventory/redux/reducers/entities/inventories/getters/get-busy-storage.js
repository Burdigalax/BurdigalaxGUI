import { prop, pipe, map, sum, values } from "ramda";

import getItemsCompletedFromCurrentInventory from "./get-items-completed-from-current-inventory";

export default state => {
  const items = getItemsCompletedFromCurrentInventory(state);

  return pipe(values, map(prop("totalWeight")), sum)(items);
};
