import {
  StyledIcon,
  Description,
  ListEffects,
  EffectsTitle,
  Title,
  EffectsLiTitle,
  Information,
  Wrapper
} from "./styles";
import { isEmpty } from "ramda";
import React from "react";

import EffectContainer from "./Effect";
import Icon from "../../../../common/components/Icon";

const renderEffects = (effects, wording) => {
  if (!effects) return null;

  return (
    <ListEffects>
      <EffectsLiTitle>
        <EffectsTitle>{wording.effects}:</EffectsTitle>
      </EffectsLiTitle>
      {effects.map(effect => (
        <EffectContainer key={effect.id} id={effect.id} value={effect.value} />
      ))}
    </ListEffects>
  );
};

export default ({
  name,
  iconUrl = "",
  description = "",
  effects,
  wording,
  titleColor = "#86a593"
}) => (
  <Wrapper>
    <Information titleColor={titleColor}>{wording.informations}</Information>
    <Description>
      {!name ? (
        <em>{wording.descriptionInformations}</em>
      ) : (
        <div>
          <StyledIcon>
            {" "}
            <Icon url={iconUrl} size={50} />
          </StyledIcon>
          <Title>{name}</Title>
          <em>{isEmpty(description) ? wording.noInformation : description}</em>
          {renderEffects(effects, wording)}
        </div>
      )}
    </Description>
  </Wrapper>
);
