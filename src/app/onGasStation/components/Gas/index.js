import React from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";

import { setGasSelectedId } from "../../redux/actions/gases";
import GasComponent from "./component";
import selectGasSelectedId from "../../redux/reducers/sceneState/selectors/select-gas-selected-id";
import selectGasById from "../../redux/reducers/entities/gases/selectors/select-gas-by-id";
import getGasIsInStockById from "../../redux/reducers/entities/gases/getters/get-gas-is-in-stock-by-id";

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

  return {
    bgColorSelected,
    color,
    name,
    iconUrl: isInStock
      ? iconUrl
      : "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+NDM8L3RpdGxlPjxnIGRhdGEtbmFtZT0iR3JvdXAiPjxwYXRoIGRhdGEtbmFtZT0iQ29tcG91bmQgUGF0aCIgZD0iTTc0LjMsMjUuN2EzNC40LDM0LjQsMCwxLDAsMCw0OC42aDBBMzQuNCwzNC40LDAsMCwwLDc0LjMsMjUuN1pNMjkuOSwyOS45YTI4LjQsMjguNCwwLDAsMSwzNy45LTJMMjcuOSw2Ny44QTI4LjQsMjguNCwwLDAsMSwyOS45LDI5LjlaTTcwLjEsNzAuMWEyOC40LDI4LjQsMCwwLDEtMzcuOSwyTDcyLjEsMzIuMkEyOC40LDI4LjQsMCwwLDEsNzAuMSw3MC4xWiI+PC9wYXRoPjwvZz48L3N2Zz4=",
    price,
    tax,
    isInStock,
    isSelected: selectedGasId === id,
    unit,
    priceTTC
  };
};

const mapDispatchToProps = {
  setGasSelectedId
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClick: ({ setGasSelectedId, isInStock, id }) => () =>
      isInStock && setGasSelectedId(id)
  })
)(GasComponent);
