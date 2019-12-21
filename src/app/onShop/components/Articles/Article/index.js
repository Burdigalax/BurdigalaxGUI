import {
  compose,
  lifecycle,
  setDisplayName,
  withHandlers,
  withState
} from "recompose";
import { connect } from "react-redux";
import { filter, path, range } from "ramda";
import { createSelector } from "reselect";

import ArticleComponent from "./component";
import selectArticleById from "../../../redux/reducers/entities/articles/selectors/select-article-by-id";
import { addArticleRequest } from "../../../redux/actions/shopping-cart";
import { selectArticle } from "../../../redux/actions/articles";
import selectConfig from "../../../redux/reducers/config/selectors/select-config";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";

const getArticle = (state, props) => selectArticleById(state, props.id);

const getData = () =>
  createSelector(
    [getArticle, selectConfig, selectWordingFromConfig],
    (article, config, wording) => {
      const { quantity } = article;
      const {
        enabledStockLimitation,
        maxQuantityForSelect,
        intervalQuantityForSelect
      } = config;
      const maxQuantity =
        enabledStockLimitation && quantity <= maxQuantityForSelect
          ? quantity
          : maxQuantityForSelect;

      const quantitiesAvailables = range(1, maxQuantity + 1);
      const quantitiesAvailablesFiltered = filter(
        val =>
          val === 1 ||
          maxQuantity - intervalQuantityForSelect < 0 ||
          (val / intervalQuantityForSelect) % 1 === 0,
        quantitiesAvailables
      );

      return {
        ...article,
        enabledStockLimitation,
        quantitiesAvailables: quantitiesAvailablesFiltered,
        isInStock: !enabledStockLimitation || article.quantity > 0,
        hasTaxEnabled: config.hasTaxEnabled,
        addToCartIconUrl: path(["iconsUrl", "addToCart"], config),
        emptyBoxUrl: path(["iconsUrl", "emptyBox"], config),
        wording,
        greenColor: path(["style", "greenColor"], config),
        redColor: path(["style", "redColor"], config)
      };
    }
  );

const makeMapStateToProps = () => {
  const getDataMemoize = getData();
  const mapStateToPropsTest = (state, props) => {
    return getDataMemoize(state, props);
  };
  return mapStateToPropsTest;
};

const mapDispatchToProps = {
  addArticleRequest,
  selectArticle
};

const ArticleContainer = compose(
  setDisplayName("OnShopArticleContainer"),
  connect(makeMapStateToProps, mapDispatchToProps),
  withState("count", "setCount", 1),
  lifecycle({
    componentDidUpdate(prevProps) {
      const {
        count,
        isInStock,
        quantity,
        enabledStockLimitation,
        setCount
      } = this.props;
      if (
        prevProps.isInStock !== isInStock ||
        (count > quantity && enabledStockLimitation && quantity > 0)
      ) {
        setCount(1);
      }
    }
  }),
  withHandlers({
    onAddToCart: ({ addArticleRequest, id, count }) => () => {
      addArticleRequest(id, count);
    },
    onChange: ({ setCount }) => event => {
      console.log("change", event);
      setCount(parseInt(event.target.value));
    },
    onClickOnArticle: ({ id, selectArticle }) => () => {
      selectArticle(id);
    }
  })
)(ArticleComponent);

export default ArticleContainer;
