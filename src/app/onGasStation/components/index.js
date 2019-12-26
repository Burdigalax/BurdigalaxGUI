import React from "react";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";

import { initModule as initModuleAction } from "../redux/actions/init";
import { onBuy, stopBuy } from "../redux/actions/gases";
import selectGases from "../redux/reducers/entities/selectors/select-gases";
import GasStation from "./component";
import selectSceneState from "../redux/reducers/sceneState/selectors/select-scene-state";
import getCurrentGasSelected from "../redux/reducers/sceneState/getters/get-current-gas-selected";
import selectFuelValueFromCar from "../redux/reducers/entities/player/selectors/select-fuel-value-from-car";
import getHasBuyDisabled from "../redux/reducers/sceneState/getters/get-has-buy-disabled";
import selectTankFromCar from "../redux/reducers/entities/player/selectors/select-tank-from-car";
import selectWordingFromConfig from "../../redux/reducers/config/selectors/select-wording-from-config";
import { JS_FUNCTIONS } from "../events";

const mapStateToProps = state => {
  const gases = selectGases(state);
  const sceneState = selectSceneState(state);
  const gasSelected = getCurrentGasSelected(state);
  const initFuelValue = selectFuelValueFromCar(state);
  const tankCapacity = selectTankFromCar(state);
  const {
    selectGas,
    informations,
    informationsList,
    add,
    plug,
    unplug
  } = selectWordingFromConfig(state);

  const hasBuyDisabled = getHasBuyDisabled(state);

  return {
    gasesIds: gases.map(gas => gas.id),
    gasSelectedId: sceneState.gasSelectedId,
    gaugeValue: sceneState.shoppingCart.countBuy + initFuelValue,
    isOnBuy: sceneState.isOnBuy,
    hasBuyDisabled,
    colorSelected: gasSelected ? gasSelected.fuelColor : "#777777",
    hasGasSelected: !!gasSelected,
    unit: gasSelected && gasSelected.unit,
    type: gasSelected && gasSelected.type,
    tankCapacity,
    wording: {
      selectGas,
      informations,
      informationsList,
      plug,
      unplug,
      add
    }
  };
};

const mapDispatchToProps = {
  initModule: initModuleAction,
  onBuy,
  stopBuy
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { initModule } = this.props;

      initModule();
      window[JS_FUNCTIONS.prefix] = {
        ...window[JS_FUNCTIONS.prefix],
        [JS_FUNCTIONS.setConfig]: initModule
      };
    }
  })
)(GasStation);
