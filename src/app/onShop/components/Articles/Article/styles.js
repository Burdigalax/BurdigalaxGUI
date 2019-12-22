import React from "react";
import styled from "styled-components";
import { MenuItem as MenuItemMaterial, withStyles } from "@material-ui/core";

import { black, red } from "../../../../common/colors";
import BurdiButton from "../../../../common/components/BurdiButton";

export const AddButton = styled(BurdiButton)`
  margin: 0;
  padding: 0;
`;

export const QuantityCol = styled.td`
  max-width: 70px;
  color: ${props => (props.isInStock ? black : red)};
`;

export const ActionCol = styled.td`
  justify-content: center;
  display: flex;
  max-width: 60px;
`;

export const NameCol = styled.td`
  min-width: 160px;
  line-height: 1;
  color: ${({ color }) => color};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: justify !important;
  > img {
    padding: 0px 10px 0px 7px;
  }
`;

export const TaxCol = styled.td`
  width: 50px;
  color: ${props => (props.tax > 0 ? props.redColor : props.greenColor)};
  opacity: 0.5;
`;

export const IconCol = styled.td`
  width: 40px;
  text-align: center;
`;

export const PriceCol = styled.td`
  width: 75px;
`;

export const MenuItem = withStyles({
  root: {
    padding: "3px"
  }
})(MenuItemMaterial);
