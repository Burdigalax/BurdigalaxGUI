import { combineReducers } from "redux";

import config from "../../../redux/reducers/config";
import sceneStateReducer from "./sceneState";

import categories from "./entities/categories";
import inventory from "./entities/inventory";
import effects from "./entities/effects";
import items from "./entities/items";
import nearbyInventories from "./entities/nearbyInventories";

const entitiesReducer = combineReducers({
  categories,
  inventory,
  items,
  effects,
  nearbyInventories
});

export default combineReducers({
  config,
  entities: entitiesReducer,
  sceneState: sceneStateReducer
});
