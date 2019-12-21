import { compose } from "recompose";
import { Provider } from "react-redux";
import React from "react";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
// noinspection ES6UnusedImports
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import devReducer from "./redux/reducers";
import devToolSaga from "./redux/sagas";
import DevToolComponent from "./component";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  devReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(devToolSaga);

const DevToolProvider = ({}) => (
  <Provider store={store}>
    <DevToolComponent />
  </Provider>
);

export default DevToolProvider;
