import { Provider, connect } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { compose, lifecycle } from "recompose";
import createSagaMiddleware from "redux-saga";
import React from "react";

import shopReducers from "../redux/reducers";
import shopSaga from "../redux/sagas";
import ShopComponent from "./component";
import { initShop } from "../redux/actions/init";
import selectStyleFromConfig from "../redux/reducers/config/selectors/select-style-from-config";
import { JS_FUNCTIONS } from "../events";
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
  lifecycle({
    componentDidMount() {
      const {
        initShop,
        resetRequest,
        updatePlayerSuccess,
        updateArticlesSuccess
      } = this.props;

      window[JS_FUNCTIONS.prefix] = {
        ...window[JS_FUNCTIONS.prefix],
        [JS_FUNCTIONS.setConfig]: initShop,
        [JS_FUNCTIONS.resetBasket]: resetRequest,
        [JS_FUNCTIONS.updatePlayer]: updatePlayerSuccess,
        [JS_FUNCTIONS.updateArticles]: updateArticlesSuccess
      };
    }
  })
)(ShopComponent);

const OnShop = () => (
  <Provider store={store}>
    <ShopContainer />
  </Provider>
);

export default OnShop;
