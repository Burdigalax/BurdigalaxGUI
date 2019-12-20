export const GET_ARTICLES_REQUEST = "GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";
export const UPDATE_ARTICLES_SUCCESS = "UPDATE_ARTICLES_SUCCESS";

export const getArticlesRequest = shopId => ({
  type: GET_ARTICLES_REQUEST,
  shopId
});

export const getArticlesSuccess = data => ({
  type: GET_ARTICLES_SUCCESS,
  data
});

export const updateArticlesSuccess = articles => ({
  type: UPDATE_ARTICLES_SUCCESS,
  articles
});
