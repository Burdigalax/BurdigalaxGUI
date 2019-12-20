import React from "react";
import styled from "styled-components";

import { black } from "../../../../../common/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin: 5px 12px 0px;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 14px;
  color: ${({ isOverweight, redColor }) => (isOverweight ? redColor : black)};
`;
