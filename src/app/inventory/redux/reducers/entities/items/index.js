import { map, mergeDeepWith, mergeAll } from "ramda";

import { SET_ITEMS, UPDATE_ITEMS } from "../../../actions/items";

const INITIAL_STATE = {};

const getItemsById = items =>
  mergeAll(
    map(
      item => ({
        [`${item.id}`]: item
      }),
      items
    )
  );

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ITEMS:
      const itemsByids = getItemsById(action.items);
      return {
        byId: itemsByids
      };
    case UPDATE_ITEMS:
      const itemsUpdated = action.items;
      const itemsUpdatedByIds = { byId: getItemsById(itemsUpdated) };
      return;
      mergeDeepWith((a, b) => b || a, state, itemsUpdatedByIds);
    default:
      return state;
  }
};
