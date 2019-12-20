import { pathOr } from "ramda";

export default pathOr(0, ["navigation", "shoppingCart", "busyStorage"]);
