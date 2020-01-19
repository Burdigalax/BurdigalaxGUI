import {
  ON_BUY,
  SET_GAS_SELECTED_ID,
  STOP_BUY,
  UPDATE_GASES
} from "../../actions/gases";
import {
  SET_PAYMENT_ERROR,
  SET_CAN_UPDATE_PAYMENT
} from "../../actions/payment";
import {
  RESET_SHOPPING_CART,
  UPDATE_SHOPPING_CART
} from "../../actions/shopping-cart";

const INITIAL_STATE = {
  shoppingCart: {
    countBuy: 0
  },
  error: {},
  canUpdatePayment: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GAS_SELECTED_ID:
      return {
        ...state,
        gasSelectedId: action.gasId,
        error: {}
      };
    case ON_BUY:
      return {
        ...state,
        isOnBuy: true,
        error: {}
      };
    case STOP_BUY:
      return {
        ...state,
        isOnBuy: false
      };
    case UPDATE_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: {
          ...state.shoppingCart,
          ...action.data
        }
      };
    case RESET_SHOPPING_CART:
    case UPDATE_GASES:
      return {
        ...state,
        shoppingCart: {
          ...INITIAL_STATE.shoppingCart
        }
      };
    case SET_PAYMENT_ERROR:
      return {
        ...state,
        error: {
          title: action.title,
          message: action.message
        }
      };
    case SET_CAN_UPDATE_PAYMENT:
      return {
        ...state,
        canUpdatePayment: action.canUpdatePayment
      };
    default:
      return state;
  }
};
