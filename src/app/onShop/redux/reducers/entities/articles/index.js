import { pathOr, map, mergeDeepWith, mergeAll } from "ramda";

import {
  GET_ARTICLES_SUCCESS,
  UPDATE_ARTICLES_SUCCESS
} from "../../../actions/shop";

const INITIAL_STATE = {};

const getArticlesById = articles =>
  mergeAll(
    map(
      article => ({
        [`${article.id}`]: {
          ...article,
          price: article.price
            ? parseFloat(
                ((article.price * article.tax) / 100 + article.price).toFixed(2)
              )
            : undefined,
          priceHT: article.price || undefined
        }
      }),
      articles
    )
  );

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      const articles = pathOr([], ["data", "articles"], action);
      const articlesByids = getArticlesById(articles);
      return {
        byId: articlesByids
      };
    case UPDATE_ARTICLES_SUCCESS:
      const articlesUpdated = action.articles;
      const articlesUpdatedByids = { byId: getArticlesById(articlesUpdated) };
      return mergeDeepWith((a, b) => b || a, state, articlesUpdatedByids);
    default:
      return state;
  }
};
