import { select, put, takeEvery } from "redux-saga/effects";
import { filter, values, propEq, map, pipe, sum, isNil, isEmpty } from "ramda";

import {
  ADD_ARTICLE_REQUEST,
  addArticleSuccess,
  DELETE_ARTICLE_REQUEST,
  deleteArticlesSuccess,
  deleteArticleSuccess,
  updateShoppingCart
} from "../actions/shopping-cart";
import selectArticleById from "../reducers/entities/articles/selectors/select-article-by-id";
import selectShoppingCart from "../reducers/navigation/shopping-cart/selectors/select-shopping-cart";
import selectArticleByIdFromShoppingCart from "../reducers/navigation/shopping-cart/selectors/select-article-by-id-from-shopping-cart";
import selectArticlesFromShoppingCart from "../reducers/navigation/shopping-cart/selectors/select-articles-from-shopping-cart";
import selectArticlesFromEntities from "../reducers/entities/articles/selectors/select-articles-from-entities";
import { RESET_REQUEST, resetSuccess } from "../actions/reset";
import { UPDATE_ARTICLES_SUCCESS } from "../actions/shop";

const formatNumber = value => parseFloat(value.toFixed(2));

const getShoppingCartArticleData = (article, quantity) => {
  const total = formatNumber(article.price * quantity);
  const tax = formatNumber((article.tax * total) / 100);
  const totalTTC = formatNumber(total + tax);
  const busyStorage = formatNumber(article.storageCost * quantity);

  return {
    id: article.id,
    quantity,
    total,
    tax,
    totalTTC,
    busyStorage
  };
};

function* addArticleRequest({ id, quantity }) {
  const article = yield select(state => selectArticleById(state, id));
  const shoppingCart = yield select(selectShoppingCart);
  const { total = 0, tax = 0, busyStorage = 0, totalTTC = 0 } =
    shoppingCart || {};

  const newArticle = getShoppingCartArticleData(article, quantity);

  const newTotal = formatNumber(total + newArticle.total);
  const newTax = formatNumber(tax + newArticle.tax);
  const newBusyStorage = formatNumber(busyStorage + newArticle.busyStorage);
  const newTotalTTC = formatNumber(totalTTC + newArticle.totalTTC);

  const data = {
    total: newTotal,
    tax: newTax,
    totalTTC: newTotalTTC,
    busyStorage: newBusyStorage
  };

  yield put(addArticleSuccess(newArticle, data));
}

function* deleteArticleRequestSaga({ id }) {
  const removedShoppingCartLine = yield select(state =>
    selectArticleByIdFromShoppingCart(state, id)
  );

  const { busyStorage = 0, total = 0, tax = 0, totalTTC = 0 } = yield select(
    selectShoppingCart
  );

  const data = {
    total: formatNumber(total - removedShoppingCartLine.total),
    tax: formatNumber(tax - removedShoppingCartLine.tax),
    totalTTC: formatNumber(totalTTC - removedShoppingCartLine.totalTTC),
    busyStorage: formatNumber(busyStorage - removedShoppingCartLine.busyStorage)
  };

  yield put(deleteArticleSuccess(removedShoppingCartLine, data));
}

function* resetShoppingCartRequest() {
  const articles = yield select(selectArticlesFromShoppingCart);

  yield put(deleteArticlesSuccess(articles));
  yield put(resetSuccess());
}

function* checkUpdateShoppingCart({ articles: updatedArticles }) {
  const shoppingCart = yield select(selectShoppingCart);
  if (isNil(shoppingCart.articles) || isEmpty(shoppingCart.articles)) return;

  const articles = yield select(selectArticlesFromEntities);

  const shoppingCartArticlesUpdated = map(shoppingCartArticle => {
    const updatedArticle = filter(
      propEq("id", shoppingCartArticle.id),
      updatedArticles
    );

    console.log("updatedArticle", updatedArticle);
    if (!updatedArticle) return shoppingCartArticle;

    const article = articles[shoppingCartArticle.id];
    const newQuantity =
      shoppingCartArticle.quantity < article.quantity
        ? shoppingCartArticle.quantity
        : article.quantity;

    return getShoppingCartArticleData(article, newQuantity);
  }, shoppingCart.articles);

  const getTotalOf = key =>
    pipe(
      map(shoppingCartArticle => shoppingCartArticle[key]),
      sum
    )(shoppingCartArticlesUpdated);

  const newShoppingCart = {
    total: getTotalOf("total"),
    tax: getTotalOf("tax"),
    totalTTC: getTotalOf("totalTTC"),
    busyStorage: getTotalOf("busyStorage"),
    articles: shoppingCartArticlesUpdated
  };

  yield put(updateShoppingCart(newShoppingCart));
}

export default function*() {
  yield takeEvery(ADD_ARTICLE_REQUEST, addArticleRequest);
  yield takeEvery(DELETE_ARTICLE_REQUEST, deleteArticleRequestSaga);
  yield takeEvery(RESET_REQUEST, resetShoppingCartRequest);
  yield takeEvery(UPDATE_ARTICLES_SUCCESS, checkUpdateShoppingCart);
}
