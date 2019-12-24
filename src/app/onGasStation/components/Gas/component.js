import React from "react";

import { Gas, GasTitle, Tax, Total, TotalTTC } from "./styles";
import Icon from "../../../common/components/Icon";

const GasComponent = ({
  bgColorSelected,
  color,
  name,
  iconUrl,
  price,
  tax,
  priceTTC,
  onClick,
  isInStock,
  isSelected,
  unit
}) => (
  <Gas
    bgColorSelected={bgColorSelected}
    onClick={onClick}
    isSelected={isSelected}
    isInStock={isInStock}
  >
    <Icon color={color} url={iconUrl} size={40} />
    <GasTitle isInStock={isInStock} color={color}>
      {name}
    </GasTitle>
    <Total>
      {price} $/{unit}
    </Total>
    <Tax value={tax}>+{tax}%</Tax>
    <TotalTTC>
      {priceTTC} $/{unit}
    </TotalTTC>
  </Gas>
);

export default GasComponent;
