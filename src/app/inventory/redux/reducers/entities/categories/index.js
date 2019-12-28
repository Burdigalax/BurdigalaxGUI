import { map, mergeDeepWith, mergeAll } from "ramda";

import { SET_CATEGORIES, UPDATE_CATEGORIES } from "../../../actions/categories";

const INITIAL_STATE = {
  byId: {
    all: {
      id: "all",
      name: "Tous les objets",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Ctitle%3Eicon-filter-all%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg fill='%23000' fill-rule='nonzero'%3E%3Cpath d='M0 0h6.4v6.4h-6.4zM0 9.601h6.4v6.399h-6.4zM9.599 9.601h6.401v6.399h-6.401zM9.599 0h6.401v6.399h-6.401z'/%3E%3C/g%3E%3C/svg%3E"
    },
    equipped: {
      id: "equipped",
      name: "Objet(s) équipé(s)",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Ctitle%3Eicon-filter-equip%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 2c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z' fill='%23000'/%3E%3C/svg%3E"
    }
  }
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
    case UPDATE_CATEGORIES:
      const categoriesUpdated = action.categories;
      const categoriesUpdatedByIds = { byId: getById(categoriesUpdated) };
      return mergeDeepWith((a, b) => b || a, state, categoriesUpdatedByIds);
    default:
      return state;
  }
};
