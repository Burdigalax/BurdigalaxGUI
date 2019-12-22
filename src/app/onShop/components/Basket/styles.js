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
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  align-self: stretch;
  border-radius: ${({ hasBgHeader }) =>
    hasBgHeader ? "0px 0px 10px 0px" : "0px 10px 10px 0"};
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
`;
