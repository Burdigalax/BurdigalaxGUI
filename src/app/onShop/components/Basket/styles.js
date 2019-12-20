import React from "react";
import styled from "styled-components";
import { veryLightGreen } from "../../../common/colors";

export const Table = styled.table`
  max-height: 340px;
  overflow: overlay;
  display: block;
  flex: 1;
  > tbody > tr {
    line-height: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 0.27;
  flex-direction: column;
  padding: 5px 5px 0;
  background-color: ${({ bgColor }) => bgColor};
  align-self: stretch;
  border-radius: 10px;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
`;
