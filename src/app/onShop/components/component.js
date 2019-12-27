import React from "react";

import { Interface, Row, StyledArticles } from "./styles";
import Header from "./Header/";
import Basket from "./Basket";

export default ({ bgColor = "#2a6041", hasBgHeader }) => (
  <Interface>
    <Header color={bgColor} />
    <Row bgColor={bgColor}>
      <StyledArticles hasBgHeader={hasBgHeader} />
      <Basket />
    </Row>
  </Interface>
);
