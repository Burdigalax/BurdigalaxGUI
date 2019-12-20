import React from "react";
import styled from "styled-components";

import BurdiButton from "../../../../common/components/BurdiButton";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.span`
  margin: 15px 5px;
  font-size: 15px;
  text-align: center;
  color: ${({ color }) => color};
`;

export const Title = styled.h4`
  margin-top: 0px;
  margin-bottom: 15px;
  font-size: 22px;
  color: ${({ color }) => color};
`;

export const ResultButton = styled(BurdiButton)`
  min-height: 30px;
`;
