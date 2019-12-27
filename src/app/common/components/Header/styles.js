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
  padding: 10px;
  border-radius: 13px 13px 0 0;
  background-color: ${({ bgColor }) => bgColor};
`;

export const FirstBloc = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h4`
  margin: 0 15px;
  color: ${({ color }) => color};
`;

export const CloseButton = styled(BurdiButton)`
  font-size: 12px;
  border-radius: 100px;
  border-width: 2px;
  font-weight: 800;
  padding: 5px 9px;
`;
