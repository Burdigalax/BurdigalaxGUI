import React from "react";
import GasStation from "./components";
import "./styles.css";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { compose } from "recompose";
import { applyMiddleware, createStore } from "redux";
import gasStationReducers from "./redux/reducers";
import gasStationSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  gasStationReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(gasStationSaga);

const GasStationContainer = () => (
  <Provider store={store}>
    <GasStation />
  </Provider>
);

export default GasStationContainer;
