import React from "react";
import { Tag, Wrapper } from "./styles";

export default ({ quantity, wording }) => (
  <Wrapper>
    <h3>{wording.basket}</h3>
    <Tag>
      <strong>{quantity} </strong> {wording.basketArticles}
    </Tag>
  </Wrapper>
);
