import { path } from "ramda";

import { SET_CONFIG } from "../../actions/config";
import fixturesShop from "./fixturesShop";
import { RESET_SUCCESS } from "../../actions/reset";

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
    case RESET_SUCCESS:
      return {
        style: state.style
      };
    default:
      return state;
  }
};
