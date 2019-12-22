import React from "react";
import { connect } from "react-redux";
import { branch, compose, renderComponent, setDisplayName } from "recompose";
import { path } from "ramda";

import ArticlesComponent from "./component";
import selectArticlesIdsByCategoryFromShop from "../../redux/reducers/entities/shop/selectors/select-articles-Ids-by-category-from-shop";
import EmptyShop from "./EmptyShop";
import selectConfig from "../../redux/reducers/config/selectors/select-config";
import selectWordingFromConfig from "../../redux/reducers/config/selectors/select-wording-from-config";

const mapStateToProps = state => {
  const articlesIdsByCategory = selectArticlesIdsByCategoryFromShop(state);
  const config = selectConfig(state);
  const wording = selectWordingFromConfig(state);

  return {
    articlesIdsByCategory,
    isEmpty: articlesIdsByCategory.length <= 0,
    hasTaxEnabled: config.hasTaxEnabled,
    wording,
    titleColor: path(["style", "titleColor"], config),
    hasBgHeader: path(["style", "header", "backgroundColor"], config)
  };
};

const ArticlesContainer = compose(
  setDisplayName("OnShopArticles"),
  connect(mapStateToProps),
  branch(({ isEmpty }) => isEmpty, renderComponent(EmptyShop))
)(ArticlesComponent);

export default ArticlesContainer;
