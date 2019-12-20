import React from "react";
import { branch, renderNothing } from "recompose";

import { StyledImg } from "./styles";

const Icon = ({ size = 20, color, url, className }) => (
  <StyledImg className={className} src={url} size={size} color={color} />
);

export default branch(({ url }) => !url, renderNothing)(Icon);
