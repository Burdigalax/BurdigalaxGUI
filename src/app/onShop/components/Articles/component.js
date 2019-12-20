import React from "react";

import {
  ActionCol,
  IconCol,
  QuantityCol,
  NameCol,
  TaxCol,
  Table,
  PriceCol,
  Wrapper
} from "./styles";
import ArticleContainer from "./Article";
import Informations from "./Informations";

const renderArticle = id => <ArticleContainer id={id} key={id} />;

const ArticlesComponent = ({
  articlesIds,
  className,
  hasTaxEnabled = false,
  wording,
  titleColor = "#8fb39f"
}) => (
  <Wrapper className={className}>
    <Informations />
    <Table titleColor={titleColor}>
      <thead>
        <tr>
          <IconCol></IconCol>
          <NameCol>{wording.article}</NameCol>
          {hasTaxEnabled && <PriceCol>{wording.priceExcludingTax}</PriceCol>}
          {hasTaxEnabled && <TaxCol>{wording.taxName}</TaxCol>}
          <PriceCol>{wording.unitPrice}</PriceCol>
          <QuantityCol>{wording.quantity}</QuantityCol>
          <ActionCol>{wording.action}</ActionCol>
        </tr>
      </thead>
      <tbody>{articlesIds.map(renderArticle)}</tbody>
    </Table>
  </Wrapper>
);

export default ArticlesComponent;
