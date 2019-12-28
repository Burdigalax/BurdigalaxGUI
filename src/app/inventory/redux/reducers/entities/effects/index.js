import { SET_EFFECTS, UPDATE_EFFECTS } from "../../../actions/effects";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EFFECTS:
      return {
        byId: {
          ...state.byId,
          ...action.effects
        }
      };
    case UPDATE_EFFECTS:
      return {
        byId: {
          ...state.byId,
          ...action.effects
        }
      };
    default:
      return state;
  }
};
