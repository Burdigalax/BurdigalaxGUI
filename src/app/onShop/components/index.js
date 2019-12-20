import { Provider, connect } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { compose, lifecycle, withHandlers } from "recompose";
import createSagaMiddleware from "redux-saga";
import React from "react";

import shopReducers from "../redux/reducers";
import shopSaga from "../redux/sagas";
import ShopComponent from "./component";
import { initShop } from "../redux/actions/init";
import selectStyleFromConfig from "../redux/reducers/config/selectors/select-style-from-config";
import {
  config as configEvent,
  resetBasket as resetBasketEvent,
  updatePlayer as updatePlayerEvent,
  updateArticles as updateArticlesEvent
} from "../events";
import { resetRequest } from "../redux/actions/reset";
import { updateArticlesSuccess } from "../redux/actions/shop";
import { updatePlayerSuccess } from "../redux/actions/player";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  shopReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(shopSaga);

const mapDispatchToProps = {
  initShop,
  resetRequest,
  updateArticlesSuccess,
  updatePlayerSuccess
};

const mapStateToProps = state => {
  const style = selectStyleFromConfig(state);
  return {
    bgColor: style.backgroundColor
  };
};

const ShopContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    setConfig: ({ initShop }) => config => initShop(config.detail),
    resetBasketRequest: ({ resetRequest }) => () => resetRequest(),
    updateArticlesRequest: ({ updateArticlesSuccess }) => data =>
      updateArticlesSuccess(data.detail),
    updatePlayerRequest: ({ updatePlayerSuccess }) => data =>
      updatePlayerSuccess(data.detail)
  }),
  lifecycle({
    componentDidMount() {
      const {
        setConfig,
        resetBasketRequest,
        updatePlayerRequest,
        updateArticlesRequest
      } = this.props;
      window.addEventListener(configEvent, setConfig);
      window.addEventListener(resetBasketEvent, resetBasketRequest);
      window.addEventListener(updateArticlesEvent, updateArticlesRequest);
      window.addEventListener(updatePlayerEvent, updatePlayerRequest);
    },
    componentWillUnmount() {
      const {
        setConfig,
        resetBasketRequest,
        updateArticlesRequest,
        updatePlayerRequest
      } = this.props;
      window.removeEventListener(configEvent, setConfig);
      window.removeEventListener(resetBasketEvent, resetBasketRequest);
      window.addEventListener(updateArticlesEvent, updateArticlesRequest);
      window.addEventListener(updatePlayerEvent, updatePlayerRequest);
    }
  })
)(ShopComponent);

const OnShop = () => (
  <Provider store={store}>
    <ShopContainer />
  </Provider>
);

export default OnShop;
