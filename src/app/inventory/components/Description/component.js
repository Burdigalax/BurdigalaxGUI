import React from "react";

import {
  Wrapper,
  Data,
  Header,
  Informations,
  Title,
  WrapperIcon,
  Description,
  Effects,
  Information
} from "./styles";
import Icon from "../../../common/components/Icon";
import EffectContainer from "./Effects";

const renderEffect = ({ id, value }) => (
  <EffectContainer key={`effect-${id}`} id={id} value={value} />
);

export default ({
  imageUrl,
  description,
  name,
  weight,
  quantity = 1,
  totalWeight,
  effects = [],
  isEquipped
}) => (
  <Wrapper>
    <WrapperIcon>
      <Icon size={70} url={imageUrl} />
    </WrapperIcon>
    <Data>
      <Header>
        <Title>{name}</Title>
        <Informations>
          {isEquipped && <Information color={"#faa829"}>Equipé</Information>}
          <Information>
            <Icon
              color={"#959da3"}
              size={15}
              url={
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 511.999 511.999' style='enable-background:new 0 0 511.999 511.999;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M503.058,157.279l-42.338-42.338l31.827-31.815c2.814-2.811,4.396-6.62,4.396-10.604c0-3.984-1.582-7.793-4.395-10.605 l-42.612-42.612c-5.625-5.625-15.586-5.625-21.211,0L396.91,51.132L354.566,8.786c-11.715-11.715-30.71-11.715-42.426,0 c-11.717,11.715-11.717,30.71,0,42.426l148.491,148.493c11.717,11.715,30.712,11.715,42.427,0 C514.773,187.99,514.773,168.995,503.058,157.279z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M199.86,460.786L51.369,312.293c-11.717-11.715-30.71-11.715-42.427,0c-11.715,11.717-11.715,30.712,0,42.427 l42.345,42.345l-31.765,31.752c-2.813,2.813-4.395,6.621-4.395,10.605s1.582,7.793,4.395,10.605l42.612,42.598 c2.929,2.931,6.767,4.396,10.605,4.396s7.676-1.465,10.605-4.395l31.752-31.752l42.338,42.339 c11.715,11.715,30.71,11.715,42.426,0C211.577,491.496,211.577,472.501,199.86,460.786z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpolygon points='269.713,178.492 178.647,269.868 242.287,333.508 333.353,242.13 '/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M460.632,242.131L269.713,51.212c-11.715-11.715-30.711-11.715-42.426,0c-11.717,11.717-11.717,30.71,0,42.427 l190.919,190.919c11.715,11.715,30.71,11.715,42.426,0C472.349,272.843,472.349,253.848,460.632,242.131z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M284.714,418.36L93.794,227.44c-11.715-11.715-30.71-11.715-42.425,0c-11.717,11.717-11.717,30.712,0,42.427 l190.919,190.919c11.715,11.715,30.71,11.715,42.426,0C296.431,449.071,296.431,430.076,284.714,418.36z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E"
              }
            />
            {weight}
          </Information>
          <Information> x{quantity} </Information>
          <Information>
            Total
            <Icon
              color={"#959da3"}
              size={15}
              url={
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='10' viewBox='0 0 11 10'%3E%3Ctitle%3Eicon-weight%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M10.531 9.625l-2.155-6.244c-.042-.111-.139-.181-.264-.181h-1.669c.403-.334.667-.862.654-1.432-.028-.946-.793-1.724-1.738-1.766-1.029-.042-1.877.779-1.877 1.808 0 .556.25 1.057.654 1.391h-1.6829999999999998c-.111 0-.222.07-.264.181l-2.169 6.244c-.07.181.07.375.264.375h9.985c.195-.014.334-.195.264-.375zm-5.257-8.58c.417 0 .765.334.765.765s-.348.751-.765.751c-.417 0-.765-.334-.765-.765s.348-.751.765-.751z' fill='%23000' fill-rule='nonzero'/%3E%3C/svg%3E"
              }
            />
            {totalWeight}
          </Information>
        </Informations>
      </Header>
      <Description>{description}</Description>
      <Effects>{effects.map(renderEffect)}</Effects>
    </Data>
  </Wrapper>
);
