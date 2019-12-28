import { pathOr } from "ramda";

const emptyObject = {};
export default (state, id) =>
  pathOr(emptyObject, ["entities", "categories", "byId", id], state);
