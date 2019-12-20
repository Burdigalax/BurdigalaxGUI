import React from "react";
import { map } from "ramda";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import {
  AddButton,
  IconCol,
  TaxCol,
  NameCol,
  QuantityCol,
  PriceCol,
  ActionCol
  // Select
} from "./styles";
import Icon from "../../../../common/components/Icon";
import { BTN_VARIANT } from "../../../../common/components/BurdiButton/constants";
import { green, red } from "../../../../common/colors";

const renderOptions = quantitiesAvailables =>
  map(
    index => (
      <MenuItem key={`quantity-${index}`} value={index}>
        {index}
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
      <IconCol>
        <Icon url={iconUrl} size={30} />
      </IconCol>
      <NameCol onClick={onClickOnArticle} color={greenColor}>
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
          /*<Select onChange={onChange} defaultValue={count}>
            {renderOptions(quantitiesAvailables)}
          </Select>*/

          <Select value={count} onChange={onChange} displayEmpty>
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
          color={isInStock ? greenColor : redColor}
          variant={BTN_VARIANT.secondary}
        />
      </ActionCol>
    </tr>
  );
};
