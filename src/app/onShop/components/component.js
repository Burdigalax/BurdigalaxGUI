import React from "react";

import { Interface, Row, StyledArticles, Wrapper } from "./styles";
import Header from "./Header/";
import Basket from "./Basket";

export default ({ bgColor = "#2a6041" }) => (
  <Interface>
    <Header color={bgColor} />
    <Row bgColor={bgColor}>
      <StyledArticles />
      <Basket />
    </Row>
  </Interface>
);
