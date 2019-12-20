import { mergeDeepRight } from "ramda";
import {
  GET_PLAYER_SUCCESS,
  UPDATE_PLAYER_SUCCESS
} from "../../../actions/player";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PLAYER_SUCCESS:
      return action.data;
    case UPDATE_PLAYER_SUCCESS:
      return mergeDeepRight(state, action.player);
    default:
      return state;
  }
};
