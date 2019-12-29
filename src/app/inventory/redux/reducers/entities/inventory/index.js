import { pathOr, pipe, mergeDeepRight, mergeAll, map, reject } from "ramda";

import {
  SET_INVENTORY,
  UPDATE_INVENTORY,
  UPDATE_ITEMS_INVENTORY_SUCCESS
} from "../../../actions/inventory";

const INITIAL_STATE = {};

const getItemsById = (items = []) =>
  pipe(
    map(item => ({
      [`${item.id}`]: item
    })),
    mergeAll
  )(items);

const excludeItemsQuantityZero = inventory => {
  const itemsById = pathOr([], ["items", "byId"], inventory);
  return {
    ...inventory,
    items: {
      byId: reject(item => !item.quantity, itemsById)
    }
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INVENTORY:
      return excludeItemsQuantityZero({
        ...action.inventory,
        items: {
          byId: getItemsById(pathOr([], ["inventory", "items"], action))
        }
      });
    case UPDATE_INVENTORY:
      const newInventory = {
        ...action.inventory,
        items: {
          byId: getItemsById(pathOr([], ["inventory", "items"], action))
        }
      };
      return excludeItemsQuantityZero(mergeDeepRight(state, newInventory));
    case UPDATE_ITEMS_INVENTORY_SUCCESS:
      const itemsUpdatedByIds = { byId: getItemsById(action.items) };
      const existingItems = pathOr([], ["items"], state);
      const newItems = mergeDeepRight(existingItems, itemsUpdatedByIds);
      return excludeItemsQuantityZero({
        ...state,
        items: newItems
      });
    default:
      return state;
  }
};
