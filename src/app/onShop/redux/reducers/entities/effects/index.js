import { GET_EFFECTS_SUCCESS } from "../../../actions/effects";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EFFECTS_SUCCESS:
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
