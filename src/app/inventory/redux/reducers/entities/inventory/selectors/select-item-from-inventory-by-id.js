import { pathOr } from "ramda";

const emptyObject = {};
export default (state, id) =>
  pathOr(emptyObject, ["entities", "inventory", "items", "byId", id], state);
