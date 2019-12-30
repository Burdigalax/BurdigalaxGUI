import React from "react";
import Inventory from "./components/Inventory";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { compose } from "recompose";
import { applyMiddleware, createStore } from "redux";

import inventoryReducers from "./redux/reducers";
import mainInventorySaga from "./redux/sagas/mainInventory/";
import transferInventorySaga from "./redux/sagas/transferInventory/";

import TransferInventory from "./components/TransferInventory";
import { Wrapper } from "./styles";
import DraggableContainer from "./components/Draggable";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  inventoryReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mainInventorySaga);

const storeTransferInventory = createStore(
  inventoryReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(transferInventorySaga);

const InventoryContainer = () => (
  <Provider store={store}>
    <Inventory />
  </Provider>
);

const TransferInventoryContainer = () => (
  <Provider store={storeTransferInventory}>
    <TransferInventory />
  </Provider>
);

export default () => (
  <DraggableContainer>
    <Wrapper onContextMenu={e => e.preventDefault()}>
      <InventoryContainer />
      <TransferInventoryContainer />
    </Wrapper>
  </DraggableContainer>
);
