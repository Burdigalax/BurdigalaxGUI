import React from "react";
import styled from "styled-components";

import BurdiButton from "../../../common/components/BurdiButton";

export const Header = styled.div`
  color: white;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  padding: 5px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 13px 13px 0 0;
`;

export const CloseButton = styled(BurdiButton)`
  padding: 5px 10px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${({ color }) => color};
`;

export const Title = styled.h4`
  margin: auto;
  color: ${({ color }) => color};
`;
