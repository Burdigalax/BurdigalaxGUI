import { branch, compose, lifecycle, renderNothing } from "recompose";
import { connect } from "react-redux";

import Inventory from "../Inventory/component";
import selectSelectedItemId from "../../redux/reducers/sceneState/selectors/select-selected-item-id";
import getItemsIdsFromCurrentInventoryByCategorySelected from "../../redux/reducers/entities/inventories/getters/get-items-ids-from-current-inventory-by-category-selected";
import getSelectedCategory from "../../redux/reducers/sceneState/getters/get-selected-category";
import { setCurrentContext, CONTEXT_TYPE } from "../../redux/actions/inventory";
import getHasReadAccessFromCurrentInventory from "../../redux/reducers/entities/inventories/getters/get-has-read-access-from-current-inventory";
import selectCurrentContext from "../../redux/reducers/sceneState/selectors/select-current-context";
import selectCurrentInventoryId from "../../redux/reducers/sceneState/selectors/select-current-inventory-id";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";
import selectConfig from "../../../redux/reducers/config/selectors/select-config";

const mapStateToProps = state => {
  const selectedItemId = selectSelectedItemId(state);
  const itemsIds = getItemsIdsFromCurrentInventoryByCategorySelected(state);
  const { name } = getSelectedCategory(state);
  const hasReadAccess = getHasReadAccessFromCurrentInventory(state);
  const context = selectCurrentContext(state);
  const idInventory = selectCurrentInventoryId(state);
  const wording = selectWordingFromConfig(state);
  const { startTransferInventoryPosition = {} } = selectConfig(state);

  return {
    idInventory,
    context,
    selectedItemId,
    itemsIds,
    categoryName: name,
    hasReadAccess,
    wording,
    position: startTransferInventoryPosition
  };
};

const mapDispatchToProps = { setCurrentContext };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { setCurrentContext } = this.props;

      setCurrentContext(CONTEXT_TYPE.transferInventory);
    }
  }),
  branch(({ hasReadAccess }) => !hasReadAccess, renderNothing)
)(Inventory);
