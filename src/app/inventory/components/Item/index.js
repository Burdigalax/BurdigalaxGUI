import React from "react";
import { compose, withHandlers, withState, mapProps } from "recompose";
import { connect } from "react-redux";
import { omit } from "ramda";

import Item from "./component";
import selectSelectedItemId from "../../redux/reducers/sceneState/selectors/select-selected-item-id";
import { setItemSelectedId } from "../../redux/actions/items";
import selectItemsById from "../../redux/reducers/entities/items/selectors/select-items-by-id";
import getItemFromCurrentInventoryById from "../../redux/reducers/entities/inventories/getters/get-item-from-current-inventory-by-id";
import { onUseItem, onEquipItem } from "../../redux/actions/items";
import selectCurrentInventoryId from "../../redux/reducers/sceneState/selectors/select-current-inventory-id";
import { onTransferItem } from "../../redux/actions/items";
import selectSelectedNearbyInventoryId from "../../redux/reducers/sceneState/selectors/select-selected-nearby-inventory-id";

import selectCurrentContext from "../../redux/reducers/sceneState/selectors/select-current-context";
import { CONTEXT_TYPE } from "../../redux/actions/inventory";

const mapStateToProps = (state, ownProps) => {
  const selectedItemId = selectSelectedItemId(state);
  const { id: idItem, health, iconUrl, isEquipable, weight } = selectItemsById(
    state,
    ownProps.id
  );
  const { quantity, isEquipped } = getItemFromCurrentInventoryById(
    state,
    ownProps.id
  );

  const idInventory = selectCurrentInventoryId(state);
  const selectedNearbyInventoryId = selectSelectedNearbyInventoryId(state);
  const context = selectCurrentContext(state);

  return {
    idInventory,
    selectedNearbyInventoryId,
    context,
    idItem,
    isSelected: selectedItemId === idItem,
    health,
    isEquipped,
    quantity,
    iconUrl,
    isEquipable,
    weight
  };
};

const mapDispatchToProps = {
  setItemSelectedId,
  onUseItem,
  onEquipItem,
  onTransferItem
};

const MIDDLE_BUTTON = 1;
const LEFT_BUTTON = 0;
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState("clickTime", "setClickTime", 0),
  withState("isOnDrag", "setIsOnDrag", false),
  withHandlers({
    onMouseDownItem: ({
      idItem,
      idInventory,
      isEquipped,
      isEquipable,
      clickTime,
      quantity,
      setClickTime,
      onUseItem,
      context,
      onEquipItem
    }) => event => {
      event.preventDefault();
      const now = Date.now();

      if (event.button === LEFT_BUTTON) {
        if (now - clickTime < 200) {
          onUseItem({ idInventory, idItem, quantity });
        }
      }

      if (
        event.button === MIDDLE_BUTTON &&
        isEquipable &&
        now - clickTime > 150 &&
        context === CONTEXT_TYPE.mainInventory
      )
        onEquipItem({ idInventory, idItem, isEquipped: !isEquipped });

      setClickTime(now);
      return false;
    },
    onClickItem: ({ setItemSelectedId, idItem, isSelected }) => () => {
      if (!isSelected) setItemSelectedId(idItem);
    }
  }),
  mapProps(
    omit([
      "context",
      "countClick",
      "setClick",
      "selectedNearbyInventoryId",
      "onTransferItem",
      "onEquipItem",
      "onUseItem"
    ])
  )
)(Item);
