import selectSelectedCategoryId from "../selectors/select-selected-category-id";
import selectCategoryById from "../../entities/categories/selectors/select-category-by-id";

export default state => {
  const selectedCategoryId = selectSelectedCategoryId(state);
  return selectCategoryById(state, selectedCategoryId);
};
