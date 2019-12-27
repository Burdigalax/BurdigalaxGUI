import React from "react";
import Inventory from "./components";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { compose } from "recompose";
import { applyMiddleware, createStore } from "redux";
import inventoryReducers from "./redux/reducers";
import inventorySaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  inventoryReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(inventorySaga);

const InventoryContainer = () => (
  <Provider store={store}>
    <Inventory />
  </Provider>
);

export default InventoryContainer;
