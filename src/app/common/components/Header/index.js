import React from "react";

import { CloseButton, FirstBloc, Title, Header } from "./styles";
import Icon from "../../../common/components/Icon";
import { BTN_VARIANT } from "../BurdiButton/constants";

const HeaderComponent = ({
  name,
  iconUrl = "",
  titleColor,
  iconColor,
  bgColor,
  iconSize = 40,
  onClose,
  hasCloseButton = false
}) => (
  <Header bgColor={bgColor}>
    <FirstBloc>
      <Icon url={iconUrl} color={iconColor} size={iconSize} />
      <Title color={titleColor}>{name}</Title>
    </FirstBloc>
    {hasCloseButton && (
      <CloseButton
        label="X"
        variant={BTN_VARIANT.secondary}
        color={"#b52222"}
        onClick={onClose}
      />
    )}
  </Header>
);

export default HeaderComponent;
