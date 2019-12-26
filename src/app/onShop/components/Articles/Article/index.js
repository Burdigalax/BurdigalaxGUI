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
import getQuantityAvailableByArticleId from "../../../redux/reducers/entities/articles/getters/get-quantity-available-by-article-id";
import selectArticleById from "../../../redux/reducers/entities/articles/selectors/select-article-by-id";
import { addArticleRequest } from "../../../redux/actions/shopping-cart";
import { selectArticle } from "../../../redux/actions/articles";
import selectConfig from "../../../../redux/reducers/config/selectors/select-config";
import selectWordingFromConfig from "../../../../redux/reducers/config/selectors/select-wording-from-config";

const getArticle = (state, props) => selectArticleById(state, props.id);

const getData = () =>
  createSelector(
    [
      getArticle,
      selectConfig,
      selectWordingFromConfig,
      (state, props, quantityAvailable) => quantityAvailable,
      (state, props) => props.id
    ],
    (article, config, wording, quantityAvailable, id) => {
      const {
        enabledStockLimitation,
        maxQuantityForSelect,
        intervalQuantityForSelect
      } = config;
      const maxQuantity =
        enabledStockLimitation && quantityAvailable <= maxQuantityForSelect
          ? quantityAvailable
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
        quantityAvailable: quantityAvailable,
        quantitiesAvailables: quantitiesAvailablesFiltered,
        isInStock: !enabledStockLimitation || quantityAvailable > 0,
        hasTaxEnabled: config.hasTaxEnabled,
        addToCartIconUrl: path(["iconsUrl", "addToCart"], config),
        emptyBoxUrl: path(["iconsUrl", "emptyBox"], config),
        wording,
        greenColor: path(["style", "greenColor"], config),
        redColor: path(["style", "redColor"], config),
        id: id
      };
    }
  );

const makeMapStateToProps = () => {
  const getDataMemoize = getData();
  const mapStateToProps = (state, props) => {
    const quantityAvailable = getQuantityAvailableByArticleId(state, props.id);
    return getDataMemoize(state, props, quantityAvailable);
  };
  return mapStateToProps;
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
        quantityAvailable,
        enabledStockLimitation,
        setCount
      } = this.props;
      if (
        prevProps.isInStock !== isInStock ||
        (count > quantityAvailable &&
          enabledStockLimitation &&
          quantityAvailable > 0)
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
      setCount(parseInt(event.target.value));
    },
    onClickOnArticle: ({ id, selectArticle }) => () => {
      selectArticle(id);
    }
  })
)(ArticleComponent);

export default ArticleContainer;
