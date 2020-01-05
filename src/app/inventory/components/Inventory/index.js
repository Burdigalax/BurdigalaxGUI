import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import { JS_FUNCTIONS } from "../../events";
import Inventory from "./component";
import selectSelectedItemId from "../../redux/reducers/sceneState/selectors/select-selected-item-id";
import { initModule } from "../../redux/actions/init";
import { setCurrentContext, CONTEXT_TYPE } from "../../redux/actions/inventory";
import {
  updateItemsInventoriesRequest,
  updateInventoriesRequest
} from "../../redux/actions/inventories";
import { updateItems as updateItemsRequest } from "../../redux/actions/items";
import getItemsIdsFromCurrentInventoryByCategorySelected from "../../redux/reducers/entities/inventories/getters/get-items-ids-from-current-inventory-by-category-selected";
import getSelectedCategory from "../../redux/reducers/sceneState/getters/get-selected-category";
import selectCurrentInventoryId from "../../redux/reducers/sceneState/selectors/select-current-inventory-id";
import { onTransferItem } from "../../redux/actions/items";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";
import selectConfig from "../../../redux/reducers/config/selectors/select-config";

const mapStateToProps = state => {
  const selectedItemId = selectSelectedItemId(state);
  const itemsIds = getItemsIdsFromCurrentInventoryByCategorySelected(state);
  const { name } = getSelectedCategory(state);
  const idInventory = selectCurrentInventoryId(state);
  const wording = selectWordingFromConfig(state);
  const { startMainInventoryPosition } = selectConfig(state);
  return {
    idInventory,
    selectedItemId,
    itemsIds,
    categoryName: name,
    wording,
    position: startMainInventoryPosition
  };
};

const mapDispatchToProps = {
  initModule,
  updateItemsInventoriesRequest,
  setCurrentContext,
  onTransferItem,
  updateInventoriesRequest,
  updateItemsRequest
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const {
        initModule,
        updateItemsInventoriesRequest,
        updateInventoriesRequest,
        setCurrentContext,
        onTransferItem,
        updateItemsRequest
      } = this.props;

      setCurrentContext(CONTEXT_TYPE.mainInventory);

      window[JS_FUNCTIONS.prefix] = {
        ...window[JS_FUNCTIONS.prefix],
        [JS_FUNCTIONS.setConfig]: initModule,
        [JS_FUNCTIONS.updateInventories]: updateInventoriesRequest,
        [JS_FUNCTIONS.updateItems]: updateItemsRequest,
        [JS_FUNCTIONS.updateItemsInventories]: updateItemsInventoriesRequest,
        [JS_FUNCTIONS.transferItem]: onTransferItem
      };
    }
  })
)(Inventory);
