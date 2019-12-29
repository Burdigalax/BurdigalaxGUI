import { pathOr } from "ramda";

const emptyArray = [];
export default (state, id) =>
  pathOr(emptyArray, ["entities", "nearbyInventories", "byId", id], state);
