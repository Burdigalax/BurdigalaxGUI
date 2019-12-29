import { SET_ITEM_SELECTED_ID } from "../../actions/items";
import { SET_NEARBY_INVENTORY_SELECTED_ID } from "../../actions/nearbyInventories";
import { SET_CATEGORY_SELECTED_ID } from "../../actions/categories";
import {
  SET_CURRENT_CONTEXT,
  SET_MAIN_INVENTORY_ID
} from "../../actions/inventory";
import { SET_CURRENT_INVENTORY_ID } from "../../actions/inventory";

const INITIAL_STATE = {
  selectedItemId: null,
  selectedNearbyInventoryId: null,
  selectedCategoryId: "all",
  currentContext: null,
  mainInventoryId: null,
  currentInventoryId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ITEM_SELECTED_ID:
      return {
        ...state,
        selectedItemId: action.id
      };
    case SET_NEARBY_INVENTORY_SELECTED_ID:
      return {
        ...state,
        selectedNearbyInventoryId: action.id
      };
    case SET_CATEGORY_SELECTED_ID:
      return {
        ...state,
        selectedCategoryId: action.id,
        selectedItemId: null
      };
    case SET_CURRENT_CONTEXT:
      return {
        ...state,
        currentContext: action.context
      };
    case SET_MAIN_INVENTORY_ID:
      return {
        ...state,
        mainInventoryId: action.id
      };
    case SET_CURRENT_INVENTORY_ID:
      return {
        ...state,
        currentInventoryId: action.id
      };
    default:
      return state;
  }
};
