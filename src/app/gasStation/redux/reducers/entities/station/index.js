import { SET_STATION, UPDATE_STATION } from "../../../actions/station";
import { mergeDeepRight } from "ramda";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STATION:
      return action.station;
    case UPDATE_STATION:
      return mergeDeepRight(state, action.station);
    default:
      return state;
  }
};
