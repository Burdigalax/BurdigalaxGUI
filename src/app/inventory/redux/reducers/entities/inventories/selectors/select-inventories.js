import { pathOr } from "ramda";

const emptyArray = [];
export default pathOr(emptyArray, ["entities", "inventories", "byId"]);
