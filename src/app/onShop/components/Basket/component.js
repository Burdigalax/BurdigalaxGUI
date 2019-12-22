import React from "react";

import { Table, Body, Wrapper } from "./styles";
import ArticleContainer from "./Article";
import Header from "./Header";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import SuccessPayment from "./SuccessPayment";
import ErrorPayment from "./ErrorPayment";

const renderArticle = (article, index) => (
  <ArticleContainer
    id={article.id}
    quantity={article.quantity}
    key={`shopping-cart-article${index}`}
  />
);

const renderBody = articles => {
  if (articles.length <= 0) return <EmptyBasket />;

  return (
    <Table>
      <tbody>{articles.map(renderArticle)}</tbody>
    </Table>
  );
};

export default ({
  articles = [],
  bgColor = "#8fb19d",
  textBasketColor = "#3d7b56",
  hasBgHeader,
  successPayment,
  errorPayment,
  hasBody = true
}) => (
  <Wrapper bgColor={bgColor} color={textBasketColor} hasBgHeader={hasBgHeader}>
    <Header />
    <SuccessPayment />
    <ErrorPayment />
    {hasBody && (
      <Body>{renderBody(articles, successPayment, errorPayment)}</Body>
    )}
    <Footer />
  </Wrapper>
);
