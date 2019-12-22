import React from "react";
import styled from "styled-components";

import Icon from "../../../../../common/components/Icon";

export const Wrapper = styled.li`
  color: ${props => (props.value > 0 ? props.greenColor : props.redColor)};
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-top: 5px;
`;

export const EffectIcon = styled(Icon)`
  margin-right: 5px;
`;
