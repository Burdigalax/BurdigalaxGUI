import React from "react";

import Icon from "../../../../../common/components/Icon";
import { red, black } from "../../../../../common/colors";
import { Text, Wrapper } from "./styles";

export default ({
  weightIconUrl = "",
  totalStorage,
  busyStorage,
  isOverweight = false,
  redColor = red
}) => (
  <Wrapper>
    <Icon
      url={weightIconUrl}
      color={isOverweight ? redColor : black}
      size={16}
    />
    <Text isOverweight={isOverweight} redColor={redColor}>
      {busyStorage} / {totalStorage}
    </Text>
  </Wrapper>
);
