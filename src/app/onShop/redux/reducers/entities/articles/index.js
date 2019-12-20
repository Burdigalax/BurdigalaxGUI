import { pathOr, map, mergeDeepWith, forEach, mergeAll, negate } from "ramda";

import {
  GET_ARTICLES_SUCCESS,
  UPDATE_ARTICLES_SUCCESS
} from "../../../actions/shop";
import {
  ADD_ARTICLE_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLES_SUCCESS
} from "../../../actions/shopping-cart";

const INITIAL_STATE = {};

const editQuantity = (state, id, addQuantity) => ({
  byId: {
    ...state.byId,
    [`${id}`]: {
      ...state.byId[id],
      quantity: state.byId[id].quantity + addQuantity
    }
  }
});

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
    case ADD_ARTICLE_SUCCESS:
      const idAdded = action.newArticle.id;
      const quantityAdded = action.newArticle.quantity;
      if (!idAdded) return state;

      return editQuantity(state, idAdded, negate(quantityAdded));
    case DELETE_ARTICLE_SUCCESS:
      const { removedArticle } = action;
      const { id: idRemoved, quantity: quantityRemoved } = removedArticle;
      if (!idRemoved) return state;

      return editQuantity(state, idRemoved, quantityRemoved);
    case DELETE_ARTICLES_SUCCESS:
      const { removedArticles } = action;
      let newState = state;
      forEach(({ id, quantity }) => {
        newState = editQuantity(newState, id, quantity);
      }, removedArticles);

      return newState;
    default:
      return state;
  }
};
