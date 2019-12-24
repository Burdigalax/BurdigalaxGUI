import { ON_BUY, SET_GAS_SELECTED_ID, STOP_BUY } from "../../actions/gases";
import {
  RESET_SHOPPING_CART,
  UPDATE_SHOPPING_CART
} from "../../actions/shopping-cart";

const INITIAL_STATE = {
  shoppingCart: {
    countBuy: 0
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GAS_SELECTED_ID:
      return {
        ...state,
        gasSelectedId: action.gasId
      };
    case ON_BUY:
      return {
        ...state,
        isOnBuy: true
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
      return {
        ...state,
        shoppingCart: {
          ...INITIAL_STATE.shoppingCart
        }
      };
    default:
      return state;
  }
};
