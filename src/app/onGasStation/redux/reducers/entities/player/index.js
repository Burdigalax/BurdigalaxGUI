import { SET_PLAYER } from "../../../actions/player";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return action.player;
    default:
      return state;
  }
};
