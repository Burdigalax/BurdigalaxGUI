import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import { JS_FUNCTIONS } from "../../events";
import Inventory from "./component";
import selectSelectedItemId from "../../redux/reducers/sceneState/selectors/select-selected-item-id";
import { initModule } from "../../redux/actions/init";
import { setCurrentContext, CONTEXT_TYPE } from "../../redux/actions/inventory";
import { updateItemsInventoriesRequest } from "../../redux/actions/inventories";
import getItemsIdsFromCurrentInventoryByCategorySelected from "../../redux/reducers/entities/inventories/getters/get-items-ids-from-current-inventory-by-category-selected";
import getSelectedCategory from "../../redux/reducers/sceneState/getters/get-selected-category";

const mapStateToProps = state => {
  const selectedItemId = selectSelectedItemId(state);
  const itemsIds = getItemsIdsFromCurrentInventoryByCategorySelected(state);
  const { name } = getSelectedCategory(state);
  return {
    selectedItemId,
    itemsIds,
    categoryName: name
  };
};

const mapDispatchToProps = {
  initModule,
  updateItemsInventoriesRequest,
  setCurrentContext
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const {
        initModule,
        updateItemsInventoriesRequest,
        updateInventoryRequest,
        updateItem,
        setCurrentContext
      } = this.props;

      setCurrentContext(CONTEXT_TYPE.mainInventory);

      window[JS_FUNCTIONS.prefix] = {
        ...window[JS_FUNCTIONS.prefix],
        [JS_FUNCTIONS.setConfig]: initModule,
        [JS_FUNCTIONS.updateInventory]: updateInventoryRequest,
        [JS_FUNCTIONS.updateItems]: updateItem,
        [JS_FUNCTIONS.updateItemsInventories]: updateItemsInventoriesRequest
      };
    }
  })
)(Inventory);
