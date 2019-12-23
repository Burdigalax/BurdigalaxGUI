import React from "react";

import Icon from "../../../../common/components/Icon";
import { Message, ResultButton, Title, Wrapper } from "./styles";
import { black } from "../../../../common/colors";
import { BTN_VARIANT } from "../../../../common/components/BurdiButton/constants";

const Result = ({
  title,
  message,
  iconUrl = "",
  color = black,
  onClick = Function.prototype,
  labelButton
}) => (
  <Wrapper>
    <Title color={color}>{title}</Title>
    <Icon url={iconUrl} color={color} size={45} />
    <Message color={color}>{message}</Message>
    <ResultButton
      label={labelButton}
      color={color}
      onClick={onClick}
      variant={BTN_VARIANT.secondary}
    />
  </Wrapper>
);

export default Result;
