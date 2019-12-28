import selectInventory from "../selectors/select-inventory";
import selectCategories from "../../categories/selectors/select-categories";
import { pipe, filter, includes, prop, values, concat } from "ramda";

export default state => {
  const { categoriesIds } = selectInventory(state);
  const categories = selectCategories(state);

  if (!categoriesIds) return [categories.all, categories.equipped];

  return pipe(
    values,
    filter(cat => includes(cat.id, categoriesIds)),
    concat([categories.all, categories.equipped])
  )(categories);
};
