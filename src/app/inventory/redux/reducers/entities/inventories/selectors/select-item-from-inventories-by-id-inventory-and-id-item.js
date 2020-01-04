import { pathOr } from "ramda";

const emptyObject = {};

export default (state, idInventory, idItem) =>
  pathOr(
    emptyObject,
    ["entities", "inventories", "byId", idInventory, "items", "byId", idItem],
    state
  );
