import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import { JS_FUNCTIONS } from "../events";
import Inventory from "./component";
import selectSelectedItemId from "../redux/reducers/sceneState/selectors/select-selected-item-id";
import { initModule } from "../redux/actions/init";
import { updateItemsInventory } from "../redux/actions/inventory";
import getItemsIdsFromInventoryByCategorySelected from "../redux/reducers/entities/inventory/getters/get-items-ids-from-inventory-by-category-selected";
import getSelectedCategory from "../redux/reducers/sceneState/getters/get-selected-category";

const mapStateToProps = state => {
  const selectedItemId = selectSelectedItemId(state);
  const itemsIds = getItemsIdsFromInventoryByCategorySelected(state);
  const { name } = getSelectedCategory(state);
  return {
    selectedItemId,
    itemsIds,
    categoryName: name
  };
};

const mapDispatchToProps = { initModule, updateItemsInventory };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const {
        initModule,
        updateInventory,
        updateItemsInventory,
        updateItem
      } = this.props;

      window[JS_FUNCTIONS.prefix] = {
        ...window[JS_FUNCTIONS.prefix],
        [JS_FUNCTIONS.setConfig]: initModule,
        [JS_FUNCTIONS.updateInventory]: updateInventory,
        [JS_FUNCTIONS.updateItems]: updateItem,
        [JS_FUNCTIONS.updateItemsInventory]: updateItemsInventory
      };
    }
  })
)(Inventory);
