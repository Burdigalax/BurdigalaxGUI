import React from "react";

import Icon from "../../../../../common/components/Icon";
import { red, black } from "../../../../../common/colors";
import { Text, Wrapper } from "./styles";

export default ({
  weightIconUrl = "",
  totalStorage,
  busyStorage,
  isOverweight = false,
  redColor = red,
  textBasketColor = "#3d7b56"
}) => (
  <Wrapper>
    <Icon
      url={weightIconUrl}
      color={isOverweight ? redColor : textBasketColor}
      size={16}
    />
    <Text
      isOverweight={isOverweight}
      redColor={redColor}
      textBasketColor={textBasketColor}
    >
      {busyStorage} / {totalStorage}
    </Text>
  </Wrapper>
);
