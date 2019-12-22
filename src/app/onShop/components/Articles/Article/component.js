import React from "react";
import { map } from "ramda";
import Select from "@material-ui/core/Select";
import { withStyles, InputBase } from "@material-ui/core";

import {
  AddButton,
  StyledIcon,
  TaxCol,
  NameCol,
  QuantityCol,
  PriceCol,
  ActionCol,
  MenuItem
} from "./styles";
import { BTN_VARIANT } from "../../../../common/components/BurdiButton/constants";
import { green, red } from "../../../../common/colors";
import Icon from "../../../../common/components/Icon";

const StyledInputBase = withStyles({
  root: {
    color: "#A6A6A6"
  }
})(InputBase);

const renderOptions = quantitiesAvailables =>
  map(
    val => (
      <MenuItem key={`quantity-${val}`} value={val}>
        {val}
      </MenuItem>
    ),
    quantitiesAvailables
  );

export default ({
  onAddToCart,
  name,
  price,
  priceHT,
  onClickOnArticle,
  quantitiesAvailables,
  isInStock,
  hasTaxEnabled = false,
  tax,
  iconUrl = "",
  count,
  addToCartIconUrl = "",
  emptyBoxUrl = "",
  onChange,
  wording,
  greenColor = green,
  redColor = red
}) => {
  return (
    <tr>
      <NameCol onClick={onClickOnArticle} color={greenColor}>
        <StyledIcon url={iconUrl} size={30} />
        {name}
      </NameCol>
      <PriceCol>
        {priceHT}
        {wording.moneySymbol}
      </PriceCol>
      {hasTaxEnabled && (
        <TaxCol tax={tax} greenColor={greenColor} redColor={redColor}>
          {tax}%
        </TaxCol>
      )}
      {hasTaxEnabled && (
        <PriceCol>
          {price}
          {wording.moneySymbol}
        </PriceCol>
      )}
      <QuantityCol isInStock={isInStock}>
        {!isInStock ? (
          <Icon url={emptyBoxUrl} size={25} color={redColor} />
        ) : (
          <Select value={count} onChange={onChange} input={<StyledInputBase />}>
            {renderOptions(quantitiesAvailables)}
          </Select>
        )}
      </QuantityCol>
      <ActionCol>
        <AddButton
          disabled={!isInStock}
          iconLeftUrl={addToCartIconUrl}
          onClick={onAddToCart}
          iconLeftSize={25}
          color={isInStock ? "#A6A6A6" : redColor}
          hoverColor={greenColor}
          variant={BTN_VARIANT.special}
        />
      </ActionCol>
    </tr>
  );
};
