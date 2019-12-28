import React from "react";
import { connect } from "react-redux";
import { compose, lifecycle, withHandlers, withState } from "recompose";
import { path, pathOr } from "ramda";

import ActionsComponent from "./component";
import getItemCompletedFromInventoryById from "../../redux/reducers/entities/inventory/getters/get-item-completed-from-inventory-by-id";
import {
  onEquipItem,
  onUseItem,
  onDeleteItem
} from "../../redux/actions/items";
import getFormatedNearbyInventoriesFromInventory from "../../redux/reducers/entities/inventory/getters/get-formated-nearby-inventories-from-inventory";
import selectSelectedNearbyInventoryId from "../../redux/reducers/sceneState/selectors/select-selected-nearby-inventory-id";
import { setNearbyInventorySelectedId } from "../../redux/actions/nearbyInventories";

const mapStateToProps = (state, props) => {
  const {
    id,
    quantity,
    isEquipable,
    isEquipped
  } = getItemCompletedFromInventoryById(state, props.itemId);

  const nearbyInventories = getFormatedNearbyInventoriesFromInventory(state);
  const selectedNearbyInventoryId =
    selectSelectedNearbyInventoryId(state) || "none";
  return {
    id,
    maxQuantity: quantity,
    isEquipable,
    isEquipped,
    nearbyInventories,
    selectedNearbyInventoryId
  };
};

const mapDispatchToProps = {
  onUseItem,
  onEquipItem,
  setNearbyInventorySelectedId,
  onDeleteItem
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState("quantity", "setQuantity", 1),
  withHandlers({
    onEquip: ({ isEquipped, id, onEquipItem }) => () =>
      onEquipItem(id, !isEquipped),
    onUse: ({ onUseItem, id, maxQuantity }) => () => onUseItem(id, maxQuantity),
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
    onDelete: ({ id, quantity, onDeleteItem }) => () =>
      onDeleteItem(id, quantity),
    onTransfer: ({}) => () => console.log("onTransfer"),
    onChangeNearbyInventory: ({ setNearbyInventorySelectedId }) => event => {
      setNearbyInventorySelectedId(path(["target", "value"], event));
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { id, maxQuantity, setQuantity } = this.props;

      if (id !== prevProps.id) return setQuantity(1);

      if (
        maxQuantity !== prevProps.maxQuantity &&
        maxQuantity > prevProps.maxQuantity
      )
        return setQuantity(maxQuantity);
    }
  })
)(ActionsComponent);
