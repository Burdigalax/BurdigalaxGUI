import { map, mergeAll } from "ramda";

import { SET_INVENTORY } from "../../../actions/categories";

const INITIAL_STATE = {
  byId: {}
};

const getById = inventories =>
  mergeAll(
    map(
      inventory => ({
        [`${inventory.id}`]: inventory
      }),
      inventories
    )
  );

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INVENTORY:
      return {
        byId: getById(action.inventories)
      };
    default:
      return state;
  }
};
