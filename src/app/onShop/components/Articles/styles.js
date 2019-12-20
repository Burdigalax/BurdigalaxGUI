import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  border-left: 1px solid gray;
  border-top: none;
  width: 100%;
  > tbody > tr:nth-child(odd) {
    background-color: #f7f7f7;
  }
  > tbody {
    border-bottom-right-radius: 10px;
    max-height: 500px;
    overflow: overlay;
    display: block;
    & tr {
      flex-direction: row;
      display: flex;
      align-items: center;
    }
    & td {
      text-align: center;
      width: 100%;
    }
  }
  > thead > tr {
    display: flex;
    flex: 1;
  }
  > thead th {
    border: 1px solid #2a604114;
    font-size: 14px;
    color: ${({ titleColor }) => titleColor};
    border-top: none;
    text-align: center;
    padding: 2px 5px;
    width: auto !important;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    &:last-child {
      border-right: none;
    }
    &:first-child {
      border-left: none;
    }
  }
`;

export const NameCol = styled.th`
  min-width: 110px;
`;

export const IconCol = styled.th`
  width: 50px;
`;

export const TaxCol = styled.th`
  width: 50px;
`;

export const QuantityCol = styled.th`
  width: 80px;
`;

export const ActionCol = styled.th`
  width: 65px;
`;

export const PriceCol = styled.th`
  width: 75px;
`;
