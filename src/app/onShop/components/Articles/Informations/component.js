import {
  StyledIcon,
  Description,
  ListEffects,
  EffectsTitle,
  Title,
  EffectsLiTitle,
  Information,
  Wrapper,
  WrapperIcon
} from "./styles";
import { isEmpty } from "ramda";
import React from "react";

import EffectContainer from "./Effect";

const renderEffects = (effects, wording) => {
  if (!effects) return null;

  return (
    <ListEffects>
      <EffectsLiTitle>
        <EffectsTitle>{wording.effects}</EffectsTitle>
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
  hasBgHeader,
  titleColor = "#86a593"
}) => (
  <Wrapper hasBgHeader={hasBgHeader}>
    <Information titleColor={titleColor}>{wording.informations}</Information>
    <Description>
      {!name ? (
        <em>{wording.descriptionInformations}</em>
      ) : (
        <div>
          <WrapperIcon>
            <StyledIcon url={iconUrl} size={50} />
          </WrapperIcon>
          <Title>{name}</Title>
          <em>{isEmpty(description) ? wording.noInformation : description}</em>
          {renderEffects(effects, wording)}
        </div>
      )}
    </Description>
  </Wrapper>
);
