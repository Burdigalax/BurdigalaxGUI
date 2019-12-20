import { SELECT_ARTICLE } from "../../../actions/articles";
import { RESET_SUCCESS } from "../../../actions/reset";

const INITIAL_STATE = {
  selectedArticleId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_ARTICLE:
      return {
        ...state,
        selectedArticleId: action.id
      };
    case RESET_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
