import React from "react";
import { connect } from "react-redux";

import Description from "./component";
import getItemCompletedFromCurrentInventoryById from "../../redux/reducers/entities/inventories/getters/get-item-completed-from-current-inventory-by-id";

const mapStateToProps = (state, props) => {
  const {
    imageUrl,
    iconUrl,
    name,
    description,
    weight,
    quantity,
    totalWeight,
    effects,
    isEquipped
  } = getItemCompletedFromCurrentInventoryById(state, props.itemId);
  return {
    imageUrl: imageUrl || iconUrl,
    description,
    name,
    weight,
    quantity,
    totalWeight,
    effects,
    isEquipped
  };
};

export default connect(mapStateToProps)(Description);
