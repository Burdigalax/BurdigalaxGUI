import { filter, propEq, keys, map, prop } from "ramda";

import getItemsIdsFromInventory from "./get-items-ids-from-inventory";
import selectSelectedCategoryId from "../../../sceneState/selectors/select-selected-category-id";
import selectItemsFromInventory from "../selectors/select-items-from-inventory";
import getItemCompletedFromInventory from "./get-items-completed-from-inventory";

export default state => {
  const itemsInventory = selectItemsFromInventory(state);
  const selectedCategoryId = selectSelectedCategoryId(state);

  if (selectedCategoryId === "all") {
    return getItemsIdsFromInventory(state);
  }

  if (selectedCategoryId === "equipped") {
    const itemsEquippedInventory = filter(
      propEq("isEquipped", true),
      itemsInventory
    );
    return keys(itemsEquippedInventory);
  }

  const itemsCompletedInventory = getItemCompletedFromInventory(state);
  return keys(
    filter(propEq("categoryId", selectedCategoryId), itemsCompletedInventory)
  );
};
