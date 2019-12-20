import { pathOr } from "ramda";

const emptyObject = {};
export default (state, id) =>
  pathOr(emptyObject, ["entities", "articles", "byId", id], state);
