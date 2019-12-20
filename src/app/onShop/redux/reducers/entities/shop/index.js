import { map, omit } from "ramda";

import { GET_ARTICLES_SUCCESS } from "../../../actions/shop";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      const articlesIds = map(article => article.id, action.data.articles);
      return {
        ...omit(["articles"], action.data),
        articlesIds
      };
    default:
      return state;
  }
};
