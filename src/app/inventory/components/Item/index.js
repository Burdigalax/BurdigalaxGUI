import React from "react";
import { compose, withHandlers, withState, mapProps } from "recompose";
import { connect } from "react-redux";
import { omit } from "ramda";

import Item from "./component";
import selectSelectedItemId from "../../redux/reducers/sceneState/selectors/select-selected-item-id";
import { setItemSelectedId } from "../../redux/actions/items";
import selectItemsById from "../../redux/reducers/entities/items/selectors/select-items-by-id";
import selectItemFromInventoryById from "../../redux/reducers/entities/inventory/selectors/select-item-from-inventory-by-id";
import { onUseItem, onEquipItem } from "../../redux/actions/items";

const mapStateToProps = (state, ownProps) => {
  const selectedItemId = selectSelectedItemId(state);
  const { id, health, iconUrl, isEquipable, weight } = selectItemsById(
    state,
    ownProps.id
  );
  const { quantity, isEquipped } = selectItemFromInventoryById(
    state,
    ownProps.id
  );
  return {
    id,
    isSelected: selectedItemId === id,
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
  onEquipItem
};

const MIDDLE_BUTTON = 1;
const LEFT_BUTTON = 0;
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState("clickTime", "setClickTime", 0),
  withHandlers({
    onMouseDownItem: ({
      id,
      isEquipped,
      isEquipable,
      clickTime,
      quantity,
      setClickTime,
      onUseItem,
      onEquipItem
    }) => event => {
      event.preventDefault();
      const now = Date.now();

      if (event.button === LEFT_BUTTON) {
        if (now - clickTime < 200) {
          onUseItem(id, quantity);
        }
      }
      if (
        event.button === MIDDLE_BUTTON &&
        isEquipable &&
        now - clickTime > 150
      )
        onEquipItem(id, !isEquipped);

      setClickTime(now);
      return false;
    },
    onClickItem: ({ setItemSelectedId, id, isSelected }) => () => {
      if (!isSelected) setItemSelectedId(id);
    }
  }),
  mapProps(omit(["countClick", "setClick"]))
)(Item);
