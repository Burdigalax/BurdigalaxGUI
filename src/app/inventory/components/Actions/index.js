import React from "react";
import { connect } from "react-redux";
import {
  compose,
  lifecycle,
  withHandlers,
  withState,
  mapProps
} from "recompose";
import { path, omit, pathOr } from "ramda";

import ActionsComponent from "./component";
import getItemCompletedFromInventoryById from "../../redux/reducers/entities/inventories/getters/get-item-completed-from-current-inventory-by-id";
import {
  onEquipItem,
  onUseItem,
  onDeleteItem,
  onTransferItem
} from "../../redux/actions/items";
import getNearbyInventoriesFromattedFromCurrentInventory from "../../redux/reducers/entities/inventories/getters/get-nearby-inventories-formatted-from-current-inventory";
import selectSelectedNearbyInventoryId from "../../redux/reducers/sceneState/selectors/select-selected-nearby-inventory-id";
import { setNearbyInventorySelectedId } from "../../redux/actions/nearbyInventories";
import selectCurrentInventoryId from "../../redux/reducers/sceneState/selectors/select-current-inventory-id";
import selectCurrentContext from "../../redux/reducers/sceneState/selectors/select-current-context";
import { CONTEXT_TYPE } from "../../redux/actions/inventory";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";

const mapStateToProps = (state, props) => {
  const {
    id: idItem,
    quantity,
    isEquipable,
    isEquipped,
    isDeletable,
    isUsable
  } = getItemCompletedFromInventoryById(state, props.itemId);

  const nearbyInventories = getNearbyInventoriesFromattedFromCurrentInventory(
    state
  );
  const selectedNearbyInventoryId =
    selectSelectedNearbyInventoryId(state) || "none";

  const idInventory = selectCurrentInventoryId(state);
  const context = selectCurrentContext(state);
  const wording = selectWordingFromConfig(state);

  return {
    idItem,
    context,
    idInventory,
    maxQuantity: quantity,
    isEquipable:
      context === CONTEXT_TYPE.transferInventory ? false : isEquipable,
    isEquipped,
    isUsable,
    nearbyInventories,
    selectedNearbyInventoryId,
    isDisabledTransfer: selectedNearbyInventoryId === "none",
    isDeletable,
    wording
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
      setQuantity(parseInt(pathOr(1, ["target", "value"], event))),
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
    onChangeNearbyInventory: ({
      setNearbyInventorySelectedId,
      idInventory
    }) => event => {
      setNearbyInventorySelectedId(
        idInventory,
        path(["target", "value"], event)
      );
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
  }),
  mapProps(omit(["context", "idItem", "idInventory"]))
)(ActionsComponent);
