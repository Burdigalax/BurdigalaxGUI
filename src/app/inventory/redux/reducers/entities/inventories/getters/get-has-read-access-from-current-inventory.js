import { pathOr } from "ramda";

import getCurrentInventory from "./get-current-inventory";

export default state => {
  const currentInventory = getCurrentInventory(state);
  return pathOr(false, ["hasReadAccess"], currentInventory);
};
