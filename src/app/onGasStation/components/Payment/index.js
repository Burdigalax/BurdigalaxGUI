import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { Resume, Money, Separtor, SubLine, TotalTTC } from "./styles";
import selectShoppingCart from "../../redux/reducers/sceneState/selectors/select-shopping-cart";
import getHasNoEnoughMoney from "../../redux/reducers/entities/player/getters/get-has-no-enough-money";
import getRemainingMoney from "../../redux/reducers/entities/player/getters/get-remaining-money-from-player";
import getCurrentGasSelected from "../../redux/reducers/sceneState/getters/get-current-gas-selected";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";
import selectConfig from "../../../redux/reducers/config/selectors/select-config";
import selectStyleFromConfig from "../../../redux/reducers/config/selectors/select-style-from-config";

const PaymentComponent = ({
  hasTaxEnabled = true,
  wording = {
    totalExcludingTax: "Total HT",
    moneySymbol: "$",
    taxName: "Taxe",
    totalAll: "Total",
    total: "Total",
    moneyAvailable: "Argent disponible"
  },
  total = 0,
  tax = 0,
  totalTTC = 0,
  remainingMoney = 0,
  countBuy = 0,
  name = "",
  hasNoEnoughMoney = false,
  unit = "L",
  redColor,
  greenColor
}) => (
  <Fragment>
    <Resume>
      <Money
        hasNoEnoughMoney={hasNoEnoughMoney}
        redColor={redColor}
        greenColor={greenColor}
      >
        <span>{wording.moneyAvailable}</span>
        <span>
          {remainingMoney} {wording.moneySymbol}
        </span>
      </Money>
      <SubLine>
        <span>{name}</span>
        <span>
          {countBuy} {unit}
        </span>
      </SubLine>
      <Separtor color={"#000"} />
      {hasTaxEnabled && (
        <SubLine>
          <span>{wording.totalExcludingTax}</span>
          <span>
            {" "}
            {total} {wording.moneySymbol}
          </span>
        </SubLine>
      )}
      {hasTaxEnabled && (
        <SubLine>
          <span>{wording.taxName} </span>
          <span>
            {tax} {wording.moneySymbol}
          </span>
        </SubLine>
      )}
      <TotalTTC>
        <span>{hasTaxEnabled ? wording.totalAll : wording.total} </span>
        <span>
          {totalTTC} {wording.moneySymbol}
        </span>
      </TotalTTC>
    </Resume>
  </Fragment>
);

const numberWithSpace = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const mapStateToProps = state => {
  const { total, totalTTC, tax, countBuy, gasName } = selectShoppingCart(state);

  const hasNoEnoughMoney = getHasNoEnoughMoney(state);
  const remainingMoney = getRemainingMoney(state);
  const currentGasSelected = getCurrentGasSelected(state);
  const wording = selectWordingFromConfig(state);
  const { redColor, greenColor } = selectStyleFromConfig(state);
  const { hasTaxEnabled } = selectConfig(state);

  return {
    remainingMoney: numberWithSpace(remainingMoney),
    wording,
    total,
    totalTTC,
    tax,
    countBuy,
    hasNoEnoughMoney,
    name: currentGasSelected && currentGasSelected.name,
    unit: currentGasSelected && currentGasSelected.unit,
    hasTaxEnabled,
    redColor,
    greenColor
  };
};

export default compose(connect(mapStateToProps))(PaymentComponent);
