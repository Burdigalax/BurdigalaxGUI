import { SET_ITEM_SELECTED_ID } from "../../actions/items";
import { SET_NEARBY_INVENTORY_SELECTED_ID } from "../../actions/nearbyInventories";
import { SET_CATEGORY_SELECTED_ID } from "../../actions/categories";

const INITIAL_STATE = {
  selectedItemId: null,
  selectedNearbyInventoryId: null,
  selectedCategoryId: "all"
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
        selectedCategoryId: action.id
      };
    default:
      return state;
  }
};
