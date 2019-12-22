import React, { Fragment } from "react";

import {
  ActionCol,
  QuantityCol,
  NameCol,
  TaxCol,
  Table,
  PriceCol,
  Wrapper,
  CategoryStep,
  Hr
} from "./styles";
import ArticleContainer from "./Article";
import Informations from "./Informations";

const renderArticle = id => <ArticleContainer id={id} key={id} />;

const renderCategory = category => (
  <Fragment>
    {category.name && (
      <CategoryStep key={`cat-${category.name}`}>
        <td>
          <div>{category.name}</div>
          <Hr />
        </td>
      </CategoryStep>
    )}
    {category.articlesIds.map(renderArticle)}
  </Fragment>
);

const ArticlesComponent = ({
  articlesIdsByCategory,
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
          <NameCol>{wording.article}</NameCol>
          {hasTaxEnabled && <PriceCol>{wording.priceExcludingTax}</PriceCol>}
          {hasTaxEnabled && <TaxCol>{wording.taxName}</TaxCol>}
          <PriceCol>{wording.unitPrice}</PriceCol>
          <QuantityCol>{wording.quantity}</QuantityCol>
          <ActionCol>{wording.action}</ActionCol>
        </tr>
      </thead>
      <tbody>{articlesIdsByCategory.map(renderCategory)}</tbody>
    </Table>
  </Wrapper>
);

export default ArticlesComponent;
