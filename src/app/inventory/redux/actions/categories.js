export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_CATEGORY_SELECTED_ID = "SET_CATEGORY_SELECTED_ID";

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories
});

export const setCategorySelectedId = id => ({
  type: SET_CATEGORY_SELECTED_ID,
  id
});
