import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { Resume, Money, Separtor, SubLine, TotalTTC } from "./styles";
import selectShoppingCart from "../../redux/reducers/sceneState/selectors/select-shopping-cart";
import getHasNoEnoughMoney from "../../redux/reducers/entities/player/getters/get-has-no-enough-money";
import getRemainingMoney from "../../redux/reducers/entities/player/getters/get-remaining-money-from-player";
import getCurrentGasSelected from "../../redux/reducers/sceneState/getters/get-current-gas-selected";

const PaymentComponent = ({
  hasTaxEnabled = true,
  wording = {
    totalExcludingTax: "Total HT",
    moneySymbol: "$",
    taxName: "Taxe",
    totalAll: "Total",
    total: "Total"
  },
  total = 0,
  tax = 0,
  totalTTC = 0,
  remainingMoney = 0,
  countBuy = 0,
  name = "",
  hasNoEnoughMoney = false,
  typeBuy = "carburant"
}) => (
  <Fragment>
    <Resume>
      <Money hasNoEnoughMoney={hasNoEnoughMoney}>
        <span>Argent disponible</span>
        <span>
          {remainingMoney} {wording.moneySymbol}
        </span>
      </Money>
      <SubLine>
        <span>{name}</span>
        <span>{countBuy} L</span>
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

  return {
    remainingMoney: numberWithSpace(remainingMoney),
    total,
    totalTTC,
    tax,
    countBuy,
    hasNoEnoughMoney,
    name: currentGasSelected && currentGasSelected.name
  };
};

export default compose(connect(mapStateToProps))(PaymentComponent);
