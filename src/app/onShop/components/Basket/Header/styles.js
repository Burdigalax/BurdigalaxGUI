import React from "react";
import styled from "styled-components";

import BurdiButton from "../../../../common/components/BurdiButton";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  align-items: baseline;
`;

export const Tag = styled.span`
  font-size: 12px;
  color: white;
  background-color: ${({ textBasketColor }) => textBasketColor};
  border-radius: 15px;
  padding: 3px 10px;
  display: inline-table;
`;

export const Title = styled.span`
  margin: 10px;
  font-weight: 500;
  font-size: 18px;
`;

export const CloseButton = styled(BurdiButton)`
  font-size: 12px;
  border-radius: 100px;
  font-weight: 800;
  padding: 5px 9px;
`;

export const EndSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
