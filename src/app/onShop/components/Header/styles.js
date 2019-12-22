import React from "react";
import styled from "styled-components";

import BurdiButton from "../../../common/components/BurdiButton";

export const Header = styled.div`
  color: white;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding-bottom: 10px;
  border-radius: 13px 13px 0 0;
`;

export const Title = styled.h4`
  margin: 15px;
  color: ${({ color }) => color};
`;
