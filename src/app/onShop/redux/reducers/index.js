import { combineReducers } from "redux";

import shop from "./entities/shop";
import player from "./entities/player";
import effects from "./entities/effects";
import articles from "./entities/articles";
import shoppingCart from "./navigation/shopping-cart";
import articleNavigation from "./navigation/articles";
import payment from "./navigation/payment";
import config from "./config";

const entitiesReducer = combineReducers({
  shop,
  articles,
  player,
  effects
});

const navigationReducer = combineReducers({
  shoppingCart,
  articles: articleNavigation,
  payment
});

export default combineReducers({
  entities: entitiesReducer,
  navigation: navigationReducer,
  config
});
