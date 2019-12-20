import { select, put, takeEvery } from "redux-saga/effects";

import {
  ADD_ARTICLE_REQUEST,
  addArticleSuccess,
  DELETE_ARTICLE_REQUEST,
  deleteArticlesSuccess,
  deleteArticleSuccess
} from "../actions/shopping-cart";
import selectArticleById from "../reducers/entities/articles/selectors/select-article-by-id";
import selectShoppingCart from "../reducers/navigation/shopping-cart/selectors/select-shopping-cart";
import selectArticleByIdFromShoppingCart from "../reducers/navigation/shopping-cart/selectors/select-article-by-id-from-shopping-cart";
import selectArticlesFromShoppingCart from "../reducers/navigation/shopping-cart/selectors/select-articles-from-shopping-cart";
import selectConfig from "../reducers/config/selectors/select-config";
import { RESET_REQUEST, resetSuccess } from "../actions/reset";

const formatNumber = value => parseFloat(value.toFixed(2));

function* addArticleRequest({ id, quantity }) {
  const article = yield select(state => selectArticleById(state, id));
  const shoppingCart = yield select(selectShoppingCart);
  const { total = 0, tax = 0, busyStorage = 0 } = shoppingCart || {};

  const totalNewArticle = formatNumber(article.price * quantity);
  const newTotal = formatNumber(total + totalNewArticle);
  const newTax = formatNumber(tax + (article.tax * totalNewArticle) / 100);

  const config = yield select(selectConfig);
  const newBusyStorage = config.enabledWeightControl
    ? formatNumber(busyStorage + quantity * article.storageCost)
    : 0;

  const data = {
    total: newTotal,
    tax: newTax,
    totalTTC: formatNumber(newTotal + newTax),
    busyStorage: newBusyStorage
  };
  const newArticle = {
    id,
    quantity,
    total: totalNewArticle
  };

  yield put(addArticleSuccess(newArticle, data));
}

function* deleteArticleRequestSaga({ id }) {
  const removedShoppingCartLine = yield select(state =>
    selectArticleByIdFromShoppingCart(state, id)
  );

  const removedArticle = yield select(state =>
    selectArticleById(state, removedShoppingCartLine.id)
  );
  const shoppingCart = yield select(selectShoppingCart);
  const config = yield select(selectConfig);

  const removedTotal = removedArticle.price * removedShoppingCartLine.quantity;
  const removedTax = (removedArticle.tax * removedTotal) / 100;
  const removedBusyStorage = config.enabledWeightControl
    ? formatNumber(
        shoppingCart.busyStorage -
          removedShoppingCartLine.quantity * removedArticle.storageCost
      )
    : 0;

  const data = {
    total: formatNumber(shoppingCart.total - removedTotal),
    tax: formatNumber(shoppingCart.tax - removedTax),
    totalTTC: formatNumber(shoppingCart.totalTTC - (removedTotal + removedTax)),
    busyStorage: removedBusyStorage
  };

  yield put(deleteArticleSuccess(removedShoppingCartLine, data));
}

function* resetShoppingCartRequest() {
  const articles = yield select(selectArticlesFromShoppingCart);

  yield put(deleteArticlesSuccess(articles));
  yield put(resetSuccess());
}

export default function*() {
  yield takeEvery(ADD_ARTICLE_REQUEST, addArticleRequest);
  yield takeEvery(DELETE_ARTICLE_REQUEST, deleteArticleRequestSaga);
  yield takeEvery(RESET_REQUEST, resetShoppingCartRequest);
}
