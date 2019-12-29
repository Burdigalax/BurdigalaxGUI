import { combineReducers } from "redux";

import config from "../../../redux/reducers/config";
import sceneStateReducer from "./sceneState";

import categories from "./entities/categories";
import inventories from "./entities/inventories";
import effects from "./entities/effects";
import items from "./entities/items";

const entitiesReducer = combineReducers({
  categories,
  inventories,
  items,
  effects
});

export default combineReducers({
  config,
  entities: entitiesReducer,
  sceneState: sceneStateReducer
});
