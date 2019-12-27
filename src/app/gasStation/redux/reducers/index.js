import { combineReducers } from "redux";

import config from "../../../redux/reducers/config";
import gases from "./entities/gases";
import player from "./entities/player";
import station from "./entities/station";
import sceneStateReducer from "./sceneState/";

const entitiesReducer = combineReducers({
  gases,
  player,
  station
});

export default combineReducers({
  config,
  entities: entitiesReducer,
  sceneState: sceneStateReducer
});
