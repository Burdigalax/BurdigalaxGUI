import React from "react";
import styled from "styled-components";

import Articles from "./Articles/";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  font-family: Arial;
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
  border: 2px solid ${({ bgColor }) => bgColor};
  border-radius: 15px 15px 5px 5px;
  font-family: arial;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${({ bgColor }) => bgColor};
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
  width: 100%;
  border-color: ${({ color }) => color};
  border-style: dashed;
  opacity: 0.3;
`;

export const StyledArticles = styled(Articles)`
  flex: 0.8;
  margin-right: 20px;
  border-radius: 10px;
  background-color: white;
  justify-content: center;
`;
