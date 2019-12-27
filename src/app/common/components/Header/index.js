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
  hasCloseButton = false,
  closeButtonColor
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
        color={closeButtonColor}
        onClick={onClose}
      />
    )}
  </Header>
);

export default HeaderComponent;
