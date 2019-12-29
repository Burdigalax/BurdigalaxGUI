import React from "react";
import { connect } from "react-redux";
import { compose, lifecycle, withHandlers, withState } from "recompose";
import { path, pathOr } from "ramda";

import ActionsComponent from "./component";
import getItemCompletedFromInventoryById from "../../redux/reducers/entities/inventory/getters/get-item-completed-from-inventory-by-id";
import {
  onEquipItem,
  onUseItem,
  onDeleteItem,
  onTransferItem
} from "../../redux/actions/items";
import getFormatedNearbyInventoriesFromInventory from "../../redux/reducers/entities/inventory/getters/get-formated-nearby-inventories-from-inventory";
import selectSelectedNearbyInventoryId from "../../redux/reducers/sceneState/selectors/select-selected-nearby-inventory-id";
import { setNearbyInventorySelectedId } from "../../redux/actions/nearbyInventories";
import selectIdFromInventory from "../../redux/reducers/entities/inventory/selectors/select-id-from-inventory";
import selectCurrentContext from "../../redux/reducers/sceneState/selectors/select-current-context";
import { CONTEXT_TYPE } from "../../redux/actions/inventory";

const mapStateToProps = (state, props) => {
  const {
    id: idItem,
    quantity,
    isEquipable,
    isEquipped
  } = getItemCompletedFromInventoryById(state, props.itemId);

  const nearbyInventories = getFormatedNearbyInventoriesFromInventory(state);
  const selectedNearbyInventoryId =
    selectSelectedNearbyInventoryId(state) || "none";

  const idInventory = selectIdFromInventory(state);
  const context = selectCurrentContext(state);

  return {
    idItem,
    idInventory,
    maxQuantity: quantity,
    isEquipable:
      context === CONTEXT_TYPE.transferInventory ? false : isEquipable,
    isEquipped,
    nearbyInventories,
    selectedNearbyInventoryId,
    isDisabledSelect: context === CONTEXT_TYPE.transferInventory
  };
};

const mapDispatchToProps = {
  onUseItem,
  onEquipItem,
  setNearbyInventorySelectedId,
  onDeleteItem,
  onTransferItem
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState("quantity", "setQuantity", 1),
  withHandlers({
    onEquip: ({ isEquipped, idInventory, idItem, onEquipItem }) => () =>
      onEquipItem({ idInventory, idItem, isEquipped: !isEquipped }),
    onUse: ({ onUseItem, idItem, maxQuantity, idInventory }) => () =>
      onUseItem({ idInventory, idItem, quantity: maxQuantity }),
    onChangeQuantity: ({ setQuantity }) => event =>
      setQuantity(pathOr(1, ["target", "value"], event)),
    onBlurQuantity: ({ maxQuantity, quantity, setQuantity }) => event => {
      const value = quantity || 1;
      const newQuantity =
        value < 1 ? 1 : value > maxQuantity ? maxQuantity : value;
      setQuantity(newQuantity);
    },
    onSetMaxQuantity: ({ maxQuantity, setQuantity }) => () =>
      setQuantity(maxQuantity),
    onDelete: ({ idItem, idInventory, quantity, onDeleteItem }) => () =>
      onDeleteItem({ idItem, idInventory, quantity }),
    onTransfer: ({
      idInventory,
      selectedNearbyInventoryId,
      idItem,
      quantity,
      onTransferItem
    }) => () =>
      onTransferItem({
        originInventoryId: idInventory,
        destinationInventoryId: selectedNearbyInventoryId,
        idItem,
        quantity
      }),
    onChangeNearbyInventory: ({ setNearbyInventorySelectedId }) => event => {
      setNearbyInventorySelectedId(path(["target", "value"], event));
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { idItem, maxQuantity, setQuantity } = this.props;

      if (idItem !== prevProps.idItem) return setQuantity(1);

      if (
        maxQuantity !== prevProps.maxQuantity &&
        maxQuantity > prevProps.maxQuantity
      )
        return setQuantity(maxQuantity);
    }
  })
)(ActionsComponent);
