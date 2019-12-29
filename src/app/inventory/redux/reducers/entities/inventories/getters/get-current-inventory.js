import selectCurrentInventoryId from "../../../sceneState/selectors/select-current-inventory-id";
import selectInventoryById from "../selectors/select-inventory-by-id";

export default state => {
  const inventoryId = selectCurrentInventoryId(state);
  return selectInventoryById(state, inventoryId);
};
