import { UPDATE_PLAYER, SET_PLAYER } from "../../../actions/player";
import { mergeDeepRight } from "ramda";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return action.player;
    case UPDATE_PLAYER:
      return mergeDeepRight(state, action.player);
    default:
      return state;
  }
};
