import React from "react";
import styled from "styled-components";

import BurdiButton from "../../../../common/components/BurdiButton";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Resume = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

export const PaymentButton = styled(BurdiButton)`
  margin: 3px 0 0;
  padding: 3px 0 0;
  border-radius: ${({ isLastButton }) => (isLastButton ? "0 0 10px" : "0")};
`;

export const TotalTTC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
`;

export const SubLine = styled.span`
  font-size: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
