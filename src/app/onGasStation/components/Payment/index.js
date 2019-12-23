import React, { Fragment } from "react";

import { Resume, Money, Separtor, SubLine, TotalTTC } from "./styles";

export default ({
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
  moneyAvailable = 0,
  countBuy = 0,
  typeBuy = "carburant"
}) => (
  <Fragment>
    <Resume>
      <Money>
        <span>Argent disponible</span>
        <span>
          {moneyAvailable} {wording.moneySymbol}
        </span>
      </Money>
      <SubLine>
        <span>Carburant</span>
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
