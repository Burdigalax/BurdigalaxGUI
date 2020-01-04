import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  color: #a6a6a6;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  border-top: none;
  width: 100%;
  > tbody {
    border-bottom-right-radius: 10px;
    max-height: 500px;
    overflow: overlay;
    display: block;
    & tr {
      flex-direction: row;
      display: flex;
      align-items: center;
      margin: 8px 0;
    }
    & td {
      text-align: center;
      width: 100%;
      font-size: 14px;
    }
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #eaeaea;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #a7a7a7;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #a7a7a7;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
      border: 0px none #6b6b6b;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: transparent;
    }
    ::-webkit-scrollbar-track:active {
      background: transparent;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
  > thead > tr {
    display: flex;
    flex: 1;
  }
  > thead th {
    text-transform: uppercase;
    font-size: 10px;
    color: ${({ titleColor }) => titleColor};
    border-top: none;
    text-align: center;
    padding: 10px 5px;
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
  min-width: 160px;
`;

export const TaxCol = styled.th`
  width: 50px;
`;

export const QuantityCol = styled.th`
  max-width: 70px;
`;

export const ActionCol = styled.th`
  max-width: 60px;
`;

export const PriceCol = styled.th`
  width: 75px;
`;

export const CategoryStep = styled.tr`
  padding: 9px 0;
  &:first-child {
    padding-top: 0;
  }
  > td {
    text-align: left !important;
    padding-left: 50px;
    padding-right: 12px;
    display: flex;
    flex-direction: row;
    opacity: 0.4;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 10px !important;
    font-weight: 700;
  }
`;

export const Hr = styled.hr`
  flex: 1;
  border-bottom: 0;
  border-top: 1.4px solid;
  border-left: 0;
  border-right: 0;
  margin-left: 10px;
  position: relative;
  top: 2px;
`;
