import { compose, mapProps, setDisplayName, withHandlers } from "recompose";
import { connect } from "react-redux";
import React from "react";
import pluralize from "pluralize";

import ArticleComponent from "./component";
import selectArticleById from "../../../redux/reducers/entities/articles/selectors/select-article-by-id";
import selectIconsUrlFromConfig from "../../../../redux/reducers/config/selectors/select-icons-from-config";
import { deleteArticleRequest } from "../../../redux/actions/shopping-cart";
import selectWordingFromConfig from "../../../../redux/reducers/config/selectors/select-wording-from-config";
import selectStyleFromConfig from "../../../../redux/reducers/config/selectors/select-style-from-config";

const mapStateToProps = (state, props) => {
  const { id, quantity } = props;
  const article = selectArticleById(state, id);
  const iconsUrl = selectIconsUrlFromConfig(state);
  const wording = selectWordingFromConfig(state);
  if (!article) return { wording };

  const { redColor, basket } = selectStyleFromConfig(state);
  return {
    name:
      quantity > 1
        ? article.pluralName || pluralize(article.name, quantity)
        : article.name,
    quantity: quantity,
    total: parseFloat((article.price * quantity).toFixed(2)),
    removeIconUrl: iconsUrl.removeToCart,
    textBasketColor: basket.textColor,
    wording,
    redColor
  };
};

const mapDispatchToProps = {
  deleteArticleRequest
};

const ArticleContainer = compose(
  setDisplayName("BasketArticleComponent"),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onDelete: ({ deleteArticleRequest, id }) => () => deleteArticleRequest(id)
  })
)(ArticleComponent);

export default ArticleContainer;
