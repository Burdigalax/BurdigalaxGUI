import React from "react";
import { connect } from "react-redux";
import { branch, compose, renderComponent, setDisplayName } from "recompose";
import { path } from "ramda";

import ArticlesComponent from "./component";
import selectArticlesIdsFromShop from "../../redux/reducers/entities/shop/selectors/select-articlesIds-from-shop";
import EmptyShop from "./EmptyShop";
import selectConfig from "../../redux/reducers/config/selectors/select-config";
import selectWordingFromConfig from "../../redux/reducers/config/selectors/select-wording-from-config";

const mapStateToProps = state => {
  const articlesIds = selectArticlesIdsFromShop(state);
  const config = selectConfig(state);
  const wording = selectWordingFromConfig(state);

  return {
    articlesIds,
    isEmpty: articlesIds.length <= 0,
    hasTaxEnabled: config.hasTaxEnabled,
    wording,
    titleColor: path(["style", "titleColor"], config)
  };
};

const ArticlesContainer = compose(
  setDisplayName("OnShopArticles"),
  connect(mapStateToProps),
  branch(({ isEmpty }) => isEmpty, renderComponent(EmptyShop))
)(ArticlesComponent);

export default ArticlesContainer;
