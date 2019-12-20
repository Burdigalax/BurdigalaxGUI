import React from "react";
import styled from "styled-components";

import { black, red } from "../../../../common/colors";
import BurdiButton from "../../../../common/components/BurdiButton";
import BurdiSelect from "../../../../common/components/BurdiSelect";

export const AddButton = styled(BurdiButton)`
  padding: 7px 4px 7px 6px;
  border-radius: 100px;
`;

export const QuantityCol = styled.td`
  width: 80px;
  color: ${props => (props.isInStock ? black : red)};
`;

export const ActionCol = styled.td`
  width: 65px;
`;

export const NameCol = styled.td`
  min-width: 110px;
  color: ${({ color }) => color};
  cursor: pointer;
`;

export const TaxCol = styled.td`
  width: 50px;
  color: ${props => (props.tax > 0 ? props.redColor : props.greenColor)};
  opacity: 0.5;
`;

export const IconCol = styled.td`
  width: 50px;
  text-align: center;
`;

export const PriceCol = styled.td`
  width: 75px;
`;

export const Select = styled(BurdiSelect)`
  min-width: 50px;
`;
