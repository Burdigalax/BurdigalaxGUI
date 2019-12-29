import { pathOr } from "ramda";

import getCurrentInventory from "./get-current-inventory";

const emptyArray = [];
export default state => {
  const currentInventory = getCurrentInventory(state);
  return pathOr(emptyArray, ["items", "byId"], currentInventory);
};
