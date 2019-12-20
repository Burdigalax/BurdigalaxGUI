export const ADD_ARTICLE_REQUEST = "ADD_ARTICLE_REQUEST";
export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";
export const DELETE_ARTICLE_REQUEST = "DELETE_ARTICLE_REQUEST";
export const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
export const DELETE_ARTICLES_SUCCESS = "DELETE_ARTICLES_SUCCESS";

export const addArticleRequest = (id, quantity) => ({
  type: ADD_ARTICLE_REQUEST,
  id,
  quantity
});

export const addArticleSuccess = (newArticle, data) => ({
  type: ADD_ARTICLE_SUCCESS,
  newArticle,
  data
});

export const deleteArticleRequest = id => ({
  type: DELETE_ARTICLE_REQUEST,
  id
});

export const deleteArticleSuccess = (removedArticle, data) => ({
  type: DELETE_ARTICLE_SUCCESS,
  removedArticle,
  data
});

export const deleteArticlesSuccess = removedArticles => ({
  type: DELETE_ARTICLES_SUCCESS,
  removedArticles
});
