import { filter, propEq, keys } from "ramda";

import getItemsIdsFromInventory from "./get-items-ids-from-inventory";
import selectSelectedCategoryId from "../../../sceneState/selectors/select-selected-category-id";
import getItemsFromCurrentInventory from "./get-items-from-current-inventory";
import getItemCompletedFromCurrentInventory from "./get-items-completed-from-current-inventory";

export default state => {
  const itemsInventory = getItemsFromCurrentInventory(state);
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

  const itemsCompletedInventory = getItemCompletedFromCurrentInventory(state);
  return keys(
    filter(propEq("categoryId", selectedCategoryId), itemsCompletedInventory)
  );
};
