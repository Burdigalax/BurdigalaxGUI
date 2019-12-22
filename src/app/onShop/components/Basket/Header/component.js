import React from "react";
import { CloseButton, Title, Tag, Wrapper, EndSection } from "./styles";
import { BTN_VARIANT } from "../../../../common/components/BurdiButton/constants";

export default ({
  quantity,
  wording,
  textBasketColor = "#3d7b56",
  onClose
}) => (
  <Wrapper>
    <Title>{wording.basket}</Title>
    <EndSection>
      <Tag textBasketColor={textBasketColor}>
        <strong>{quantity} </strong> {wording.basketArticles}
      </Tag>
      <CloseButton
        label="X"
        variant={BTN_VARIANT.secondary}
        color={textBasketColor}
        onClick={onClose}
      />
    </EndSection>
  </Wrapper>
);
