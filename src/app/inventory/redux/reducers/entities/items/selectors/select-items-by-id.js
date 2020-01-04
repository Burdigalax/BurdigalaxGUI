import { pathOr } from "ramda";

const emptyObject = {};
export default (state, id) =>
  pathOr(emptyObject, ["entities", "items", "byId", id], state);
