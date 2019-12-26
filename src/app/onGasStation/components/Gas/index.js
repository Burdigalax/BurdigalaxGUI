import React from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";

import { setGasSelectedId } from "../../redux/actions/gases";
import GasComponent from "./component";
import selectGasSelectedId from "../../redux/reducers/sceneState/selectors/select-gas-selected-id";
import selectGasById from "../../redux/reducers/entities/gases/selectors/select-gas-by-id";
import getGasIsInStockById from "../../redux/reducers/entities/gases/getters/get-gas-is-in-stock-by-id";
import selectStyleFromConfig from "../../../redux/reducers/config/selectors/select-style-from-config";
import selectConfig from "../../../redux/reducers/config/selectors/select-config";
import selectIconsFromConfig from "../../../redux/reducers/config/selectors/select-icons-from-config";

const mapStateToProps = (state, ownProps) => {
  const {
    id,
    bgColorSelected,
    color,
    name,
    iconUrl,
    price,
    tax,
    unit,
    priceTTC
  } = selectGasById(state, ownProps.id);

  const selectedGasId = selectGasSelectedId(state);
  const isInStock = getGasIsInStockById(state, ownProps.id);
  const style = selectStyleFromConfig(state);
  const { noFuel: noFuelIconUrl } = selectIconsFromConfig(state);
  const { hasTaxEnabled } = selectConfig(state);

  return {
    bgColorSelected,
    color,
    name,
    iconUrl: isInStock ? iconUrl : noFuelIconUrl,
    price,
    tax,
    isInStock,
    isSelected: selectedGasId === id,
    unit,
    priceTTC,
    redColor: style.redColor,
    greenColor: style.greenColor,
    hasTaxEnabled
  };
};

const mapDispatchToProps = {
  setGasSelectedId
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClick: ({ setGasSelectedId, isInStock, id, isSelected }) => () => {
      if (isSelected) return setGasSelectedId();
      if (isInStock) return setGasSelectedId(id);
    }
  })
)(GasComponent);
