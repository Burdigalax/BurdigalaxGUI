import {
  insert,
  findIndex,
  remove,
  filter,
  add,
  propEq,
  mergeWithKey
} from "ramda";

import {
  ADD_ARTICLE_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  UPDATE_SHOPPING_CART
} from "../../../actions/shopping-cart";
import { SET_PAYMENT_SUCCESS } from "../../../actions/payment";
import { RESET_SUCCESS } from "../../../actions/reset";

const INITIAL_STATE = {};

const findIndexByArticleId = (id, articles) =>
  findIndex(propEq("id", id), articles);

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ARTICLE_SUCCESS:
      const oldArticles = state.articles || [];
      const articleExistingIndex = findIndexByArticleId(
        action.newArticle.id,
        oldArticles
      );

      const articleExisting = oldArticles[articleExistingIndex];

      const concatValues = (k, l, r) => (k !== "id" ? add(l, r) : r);
      const newArticle = articleExisting
        ? mergeWithKey(concatValues, articleExisting, action.newArticle)
        : action.newArticle;

      const oldArticlesWithoutNewArticle = filter(
        article => article.id !== action.newArticle.id,
        oldArticles
      );

      const newArticles = insert(
        articleExistingIndex,
        newArticle,
        oldArticlesWithoutNewArticle
      );

      return {
        articles: newArticles,
        ...action.data
      };
    case DELETE_ARTICLE_SUCCESS:
      const { removedArticle } = action;
      const removeIndex = findIndexByArticleId(
        removedArticle.id,
        state.articles
      );
      if (removeIndex < 0) return state;

      const articles = remove(removeIndex, 1, state.articles);
      return {
        ...state,
        articles,
        ...action.data
      };
    case UPDATE_SHOPPING_CART:
      const { shoppingCart } = action;
      return {
        ...shoppingCart
      };
    case RESET_SUCCESS:
    case SET_PAYMENT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
