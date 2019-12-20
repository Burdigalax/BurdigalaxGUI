import {
  SET_PAYMENT_SUCCESS,
  SET_PAYMENT_ERROR,
  RESET_PAYMENT
} from "../../../actions/payment";
import { RESET_SUCCESS } from "../../../actions/reset";

const INITIAL_STATE = {
  error: null,
  success: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PAYMENT_ERROR:
      return {
        success: null,
        error: {
          title: action.title,
          message: action.message,
          iconUrl: action.iconUrl
        }
      };
    case SET_PAYMENT_SUCCESS:
      return {
        error: null,
        success: {
          title: action.title,
          message: action.message,
          iconUrl: action.iconUrl
        }
      };
    case RESET_SUCCESS:
    case RESET_PAYMENT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
