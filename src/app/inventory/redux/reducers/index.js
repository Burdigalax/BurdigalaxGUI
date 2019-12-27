import { combineReducers } from "redux";

import config from "../../../redux/reducers/config";

const entitiesReducer = combineReducers({});

export default combineReducers({
  config,
  entities: entitiesReducer
});
