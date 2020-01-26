import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { compose } from "recompose";
import { applyMiddleware, createStore } from "redux";
import Draggable from "react-draggable";
import { includes, indexOf } from "ramda";

import Inventory from "./components/Inventory";
import inventoryReducers from "./redux/reducers";
import mainInventorySaga from "./redux/sagas/mainInventory/";
import transferInventorySaga from "./redux/sagas/transferInventory/";
import TransferInventory from "./components/TransferInventory";
import { Wrapper, WrapperDraggable } from "./styles";
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

const InventoryContainerMemoize = React.memo(InventoryContainer);

const TransferInventoryContainer = () => (
  <Provider store={storeTransferInventory}>
    <TransferInventory />
  </Provider>
);

const TransferInventoryContainerMemoize = React.memo(
  TransferInventoryContainer
);

const getNewPosition = id => {
  const element = document.getElementById(id);
  const transform = element.style.transform;
  if (!includes("translate", transform)) return;

  const firstParenthesisIndex = indexOf("(", transform);
  const comaIndex = indexOf(",", transform);
  const secondParenthesisIndex = indexOf(")", transform);
  element.style.position = "relative";
  const left = parseInt(
    transform.substring(firstParenthesisIndex + 1, comaIndex)
  );
  const top = parseInt(
    transform.substring(comaIndex + 2, secondParenthesisIndex)
  );

  return { top, left };
};

export default () => {
  const [mainPosition, setMainPosition] = useState({ top: 0, left: 0 });
  const [keyMain, setKeyMain] = useState(0);
  const [transferPosition, setTransferPosition] = useState({
    top: 0,
    left: 0
  });
  const [keyTransfer, setKeyTransfer] = useState(0);

  useEffect(() => {
    document.getElementById("mainInventory").style.transform = "none";
  }, [keyMain]);

  useEffect(() => {
    document.getElementById("transferInventory").style.transform = "none";
  }, [keyTransfer]);

  const onStopMain = e => {
    const { left, top } = getNewPosition("mainInventory");
    setMainPosition({
      left: left + mainPosition.left,
      top: top + mainPosition.top
    });
    setKeyMain(keyMain + 1);
  };

  const onStopTransfer = () => {
    const { left, top } = getNewPosition("transferInventory");
    setTransferPosition({
      left: left + transferPosition.left,
      top: top + transferPosition.top
    });
    setKeyTransfer(keyTransfer + 1);
  };

  return (
    <DraggableContainer>
      <Wrapper onContextMenu={e => e.preventDefault()}>
        <Draggable
          handle=".header"
          cancel="button"
          onStop={onStopMain}
          key={`main-${keyMain}`}
        >
          <WrapperDraggable
            id={"mainInventory"}
            top={mainPosition.top}
            left={mainPosition.left}
          >
            <InventoryContainerMemoize />
          </WrapperDraggable>
        </Draggable>
        <Draggable
          handle=".header"
          cancel="button"
          onStop={onStopTransfer}
          key={`transfer-${keyTransfer}`}
        >
          <WrapperDraggable
            id={"transferInventory"}
            top={transferPosition.top}
            left={transferPosition.left}
          >
            <TransferInventoryContainerMemoize />
          </WrapperDraggable>
        </Draggable>
      </Wrapper>
    </DraggableContainer>
  );
};
