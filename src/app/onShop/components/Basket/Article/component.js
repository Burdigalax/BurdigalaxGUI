import React from "react";

import { BTN_VARIANT } from "../../../../common/components/BurdiButton/constants";
import { DeleteButton, TextCol } from "./styles";
import { red } from "../../../../common/colors";

export default ({
  quantity,
  total,
  name,
  onDelete,
  removeIconUrl,
  wording,
  redColor = red,
  textBasketColor = "#3d7b56"
}) => (
  <tr>
    <td>
      <DeleteButton
        iconLeftUrl={removeIconUrl}
        iconLeftSize={20}
        color={textBasketColor}
        hoverColor={redColor}
        variant={BTN_VARIANT.special}
        onClick={onDelete}
      />
    </td>
    <TextCol>
      {quantity} {name} - {total}
      {wording.moneySymbol}
    </TextCol>
  </tr>
);
