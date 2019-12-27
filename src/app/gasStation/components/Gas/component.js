import React, { Fragment } from "react";

import { Gas, GasTitle, Tax, Total, TotalTTC } from "./styles";
import Icon from "../../../common/components/Icon";

const GasComponent = ({
  bgColorSelected,
  bgColor,
  priceColor,
  color,
  name,
  iconUrl,
  price,
  tax,
  priceTTC,
  onClick,
  isInStock,
  isSelected,
  unit,
  redColor,
  greenColor,
  hasTaxEnabled
}) => (
  <Gas
    bgColorSelected={bgColorSelected}
    bgColor={bgColor}
    onClick={onClick}
    isSelected={isSelected}
    isInStock={isInStock}
    color={priceColor}
  >
    <Icon color={color} url={iconUrl} size={40} />
    <GasTitle isInStock={isInStock} color={color}>
      {name}
    </GasTitle>
    {hasTaxEnabled && (
      <Fragment>
        <Total>
          {price} $/{unit}
        </Total>
        <Tax value={tax} redColor={redColor} greenColor={greenColor}>
          +{tax}%
        </Tax>
      </Fragment>
    )}
    <TotalTTC>
      {priceTTC} $/{unit}
    </TotalTTC>
  </Gas>
);

export default GasComponent;
