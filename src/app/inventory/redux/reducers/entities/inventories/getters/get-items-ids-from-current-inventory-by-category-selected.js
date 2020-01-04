import { filter, propEq, keys } from "ramda";

import getItemsIdsFromInventory from "./get-items-ids-from-inventory";
import selectSelectedCategoryId from "../../../sceneState/selectors/select-selected-category-id";
import getItemsCompletedFromCurrentInventory from "./get-items-completed-from-current-inventory";
import getItemCompletedFromCurrentInventory from "./get-items-completed-from-current-inventory";

export default state => {
  const itemsInventory = getItemsCompletedFromCurrentInventory(state);
  const selectedCategoryId = selectSelectedCategoryId(state);

  if (selectedCategoryId === "all") {
    return getItemsIdsFromInventory(state);
  }

  if (selectedCategoryId === "equipable") {
    const itemsEquipableInventory = filter(
      propEq("isEquipable", true),
      itemsInventory
    );
    console.log("merde", itemsEquipableInventory);
    return keys(itemsEquipableInventory);
  }

  const itemsCompletedInventory = getItemCompletedFromCurrentInventory(state);
  return keys(
    filter(propEq("categoryId", selectedCategoryId), itemsCompletedInventory)
  );
};
