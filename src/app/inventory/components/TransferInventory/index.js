import { branch, compose, lifecycle, renderNothing } from "recompose";
import { connect } from "react-redux";

import Inventory from "../Inventory/component";
import selectSelectedItemId from "../../redux/reducers/sceneState/selectors/select-selected-item-id";
import getItemsIdsFromCurrentInventoryByCategorySelected from "../../redux/reducers/entities/inventories/getters/get-items-ids-from-current-inventory-by-category-selected";
import getSelectedCategory from "../../redux/reducers/sceneState/getters/get-selected-category";
import { setCurrentContext, CONTEXT_TYPE } from "../../redux/actions/inventory";
import getHasItemsFromCurrentInventory from "../../redux/reducers/entities/inventories/getters/get-has-items-form-current-inventory";

const mapStateToProps = state => {
  const selectedItemId = selectSelectedItemId(state);
  const itemsIds = getItemsIdsFromCurrentInventoryByCategorySelected(state);
  const { name } = getSelectedCategory(state);
  const hasItems = getHasItemsFromCurrentInventory(state);
  return {
    selectedItemId,
    itemsIds,
    categoryName: name,
    hasItems
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
  branch(({ hasItems }) => !hasItems, renderNothing)
)(Inventory);
