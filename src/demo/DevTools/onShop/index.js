import { compose, withHandlers, withState, mapProps, pure } from "recompose";
import { connect, Provider } from "react-redux";
import { omit } from "ramda";
import React from "react";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";

import selectCodeFromDevTool from "./redux/reducers/selectors/select-code-from-devtool";
import { setCode } from "./redux/actions";
import devReducer from "./redux/reducers";
import devToolSaga from "./redux/sagas";
import DevToolComponent from "./component";
import {
  paymentError as paymentErrorEvent,
  paymentSuccess as paymentSuccessEvent,
  resetBasket as resetBasketEvent,
  updatePlayer as updatePlayerEvent,
  updateArticles as updateArticlesEvent,
  config as configEvent
} from "../../../app/onShop/events";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  devReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(devToolSaga);

const mapStateToProps = state => {
  const code = selectCodeFromDevTool(state);
  return {
    codeConfigEvent: JSON.stringify(code.configEvent, null, 3),
    codePaymentErrorEvent: JSON.stringify(code.paymentErrorEvent, null, 3),
    codePaymentSuccessEvent: JSON.stringify(code.paymentSuccessEvent, null, 3),
    codeUpdatePlayerEvent: JSON.stringify(code.updatePlayerEvent, null, 3),
    codeUpdateArticlesEvent: JSON.stringify(code.updateArticlesEvent, null, 3)
  };
};

const mapDispatchToProps = {
  setCode
};

const DevToolContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState("hasEditToolOpen", "toggleEditTool", false),
  withState(
    "newCodeConfigEvent",
    "setNewCodeConfigEvent",
    ({ codeConfigEvent }) => codeConfigEvent
  ),
  withState(
    "newCodePaymentErrorEvent",
    "setNewCodePaymentErrorEvent",
    ({ codePaymentErrorEvent }) => codePaymentErrorEvent
  ),
  withState(
    "newCodePaymentSuccessEvent",
    "setNewCodePaymentSuccessEvent",
    ({ codePaymentSuccessEvent }) => codePaymentSuccessEvent
  ),
  withState(
    "newCodeUpdatePlayerEvent",
    "setNewCodeUpdatePlayerEvent",
    ({ codeUpdatePlayerEvent }) => codeUpdatePlayerEvent
  ),
  withState(
    "newCodeUpdateArticlesEvent",
    "setNewCodeUpdateArticlesEvent",
    ({ codeUpdateArticlesEvent }) => codeUpdateArticlesEvent
  ),
  withHandlers({
    onSend: ({
      newCodeConfigEvent,
      setNewCodeConfigEvent,
      toggleEditTool,
      hasEditToolOpen
    }) => () => {
      const data = JSON.parse(newCodeConfigEvent);
      if (hasEditToolOpen) toggleEditTool(false);

      window.dispatchEvent(
        new CustomEvent(configEvent, {
          detail: data
        })
      );
      // setNewCodeConfigEvent(data);
    },
    onEdit: ({ hasEditToolOpen, toggleEditTool }) => () =>
      toggleEditTool(!hasEditToolOpen),
    onChangeConfigEvent: ({ setNewCodeConfigEvent }) => value =>
      setNewCodeConfigEvent(value),
    onChangePaymentErrorEvent: ({ setNewCodePaymentErrorEvent }) => value =>
      setNewCodePaymentErrorEvent(value),
    onChangePaymentSuccessEvent: ({ setNewCodePaymentSuccessEvent }) => value =>
      setNewCodePaymentSuccessEvent(value),
    onChangeUpdatePlayerEvent: ({ setNewCodeUpdatePlayerEvent }) => value =>
      setNewCodeUpdatePlayerEvent(value),
    onChangeUpdateArticlesEvent: ({ setNewCodeUpdateArticlesEvent }) => value =>
      setNewCodeUpdateArticlesEvent(value),
    setPaymentError: ({ newCodePaymentErrorEvent }) => () => {
      window.dispatchEvent(
        new CustomEvent(paymentErrorEvent, {
          detail: JSON.parse(newCodePaymentErrorEvent)
        })
      );
    },
    setPaymentSuccess: ({ newCodePaymentSuccessEvent }) => () => {
      window.dispatchEvent(
        new CustomEvent(paymentSuccessEvent, {
          detail: JSON.parse(newCodePaymentSuccessEvent)
        })
      );
    },
    setResetRequest: () => () => {
      window.dispatchEvent(new CustomEvent(resetBasketEvent));
    },
    setUpdatePlayer: ({ newCodeUpdatePlayerEvent }) => () => {
      window.dispatchEvent(
        new CustomEvent(updatePlayerEvent, {
          detail: JSON.parse(newCodeUpdatePlayerEvent)
        })
      );
    },
    setUpdateArticles: ({ newCodeUpdateArticlesEvent }) => () => {
      window.dispatchEvent(
        new CustomEvent(updateArticlesEvent, {
          detail: JSON.parse(newCodeUpdateArticlesEvent)
        })
      );
    }
  }),
  mapProps(omit(["setCode", "setNewCode"])),
  pure
)(DevToolComponent);

const DevToolProvider = ({}) => (
  <Provider store={store}>
    <DevToolContainer />
  </Provider>
);

export default DevToolProvider;
