import { SET_CONFIG } from "../../actions/config";

const INITIAL_STATE = {};

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
