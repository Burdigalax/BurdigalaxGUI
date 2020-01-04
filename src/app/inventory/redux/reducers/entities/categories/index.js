import { map, mergeDeepWith, mergeAll } from "ramda";

import { SET_CATEGORIES } from "../../../actions/categories";

const INITIAL_STATE = {
  byId: {}
};

const getById = categories =>
  mergeAll(
    map(
      category => ({
        [`${category.id}`]: category
      }),
      categories
    )
  );

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      const categoriesUpdated = action.categories;
      const categoriesUpdatedByIds = { byId: getById(categoriesUpdated) };
      return mergeDeepWith((a, b) => b || a, state, categoriesUpdatedByIds);
    default:
      return state;
  }
};
