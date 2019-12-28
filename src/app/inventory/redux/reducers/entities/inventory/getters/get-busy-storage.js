import { prop, pipe, map, sum, values } from "ramda";

import getItemsCompletedFromInventory from "./get-items-completed-from-inventory";

export default state => {
  const items = getItemsCompletedFromInventory(state);

  return pipe(values, map(prop("totalWeight")), sum)(items);
};
