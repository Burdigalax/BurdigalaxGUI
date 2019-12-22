import React from "react";

import { EffectIcon, Wrapper } from "./styles";
import { green, red } from "../../../../../common/colors";

const EffectComponent = ({
  name,
  iconUrl,
  value,
  unit,
  greenColor = green,
  redColor = red
}) => (
  <Wrapper value={value} greenColor={greenColor} redColor={redColor}>
    <EffectIcon size={15} url={iconUrl} /> {name} {value > 0 ? "+" : ""} {value}
    {unit}
  </Wrapper>
);

export default EffectComponent;
