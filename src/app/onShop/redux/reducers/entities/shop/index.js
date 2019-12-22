import {
  groupBy,
  map,
  pathOr,
  path,
  find,
  propEq,
  omit,
  pipe,
  uniq,
  filter
} from "ramda";

import { GET_ARTICLES_SUCCESS } from "../../../actions/shop";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      const articles = pathOr([], ["data", "articles"], action);
      const categoryNames = pipe(map(path(["categoryName"])), uniq)(articles);

      const articlesIdsByCategory = map(categoryName => {
        return {
          name: categoryName,
          articlesIds: pipe(
            filter(propEq("categoryName", categoryName)),
            map(path(["id"]))
          )(articles)
        };
      }, categoryNames);

      return {
        ...omit(["articles"], action.data),
        articlesIdsByCategory
      };
    default:
      return state;
  }
};
