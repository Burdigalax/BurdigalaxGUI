import { RESET_CONFIG, INIT_STATE, SET_CONFIG } from "../actions/config";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_STATE:
      return action.initialState;
    case SET_CONFIG:
      return {
        ...state,
        ...action.data
      };
    case RESET_CONFIG:
      return {
        style: state.style
      };
    default:
      return state;
  }
};
