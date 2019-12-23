import React from "react";
import styled from "styled-components";

import Articles from "./Articles/";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  font-family: Montserrat, sans-serif;
  h3 {
    font-size: 20px;
    margin: 5px 0;
    font-weight: 500;
  }
`;

export const Interface = styled.div`
  min-width: 700px;
  max-width: 1000px;
  max-height: 1500px;
  margin: auto;
  font-family: Montserrat, sans-serif;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: stretch;
`;

export const BuyButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 60px;
`;

export const Separtor = styled.hr`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-color: ${({ color }) => color};
  border-style: dashed;
  width: 100%;
  opacity: 0.3;
`;

export const StyledArticles = styled(Articles)`
  flex: 0.8;
  border-radius: ${({ hasBgHeader }) =>
    hasBgHeader ? "0 0 0 10px" : "10px 0px 0px 10px"};
  background-color: white;
  justify-content: center;
`;
