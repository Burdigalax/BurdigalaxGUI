import { path } from "ramda";

import { SET_CONFIG } from "../../actions/config";
import fixturesShop from "./fixturesShop";

const INITIAL_STATE = {
  style: path(["config", "style"], fixturesShop)
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CONFIG:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};
