import React, { useState } from "react";
import { compose, lifecycle, withProps } from "recompose";

import {
  JS_FUNCTIONS,
  onEquip,
  onUse,
  onDelete,
  onTransfer
} from "../../../app/inventory/events";
import Exemple from "../commons/exemple/";
import { Button, Wrapper } from "./styles";
import { setConfig, updateInventories } from "./fixtures";

const LiveDemo = ({ defaultCodeConfig, defaultCodeUpdateInventories }) => {
  const [hasSetConfigOpen, setSetConfigOpen] = useState(false);
  const [hasUpdateInventoryOpen, setUpdateInventoryOpen] = useState(false);

  const toggleSetConfig = () => setSetConfigOpen(!hasSetConfigOpen);
  const toggleUpdateInventory = () =>
    setUpdateInventoryOpen(!hasUpdateInventoryOpen);

  return (
    <Wrapper>
      <strong>Readme:</strong> Check github project :{" "}
      <a
        href="https://github.com/Burdigalax/BurdigalaxGUI/src/app/inventory"
        target="_blank"
      >
        https://github.com/Burdigalax/BurdigalaxGUI/src/app/inventory
      </a>
      <br />
      <div>
        <h3>Live demo</h3>
        <Button onClick={toggleSetConfig}>{JS_FUNCTIONS.setConfig}</Button>
        {hasSetConfigOpen && (
          <Exemple
            defaultCode={defaultCodeConfig}
            prefix={JS_FUNCTIONS.prefix}
            functionName={JS_FUNCTIONS.setConfig}
          />
        )}
        <br />
        <Button onClick={toggleUpdateInventory}>
          {JS_FUNCTIONS.updateInventories}
        </Button>
        {hasUpdateInventoryOpen && (
          <Exemple
            defaultCode={defaultCodeUpdateInventories}
            prefix={JS_FUNCTIONS.prefix}
            functionName={JS_FUNCTIONS.updateInventories}
          />
        )}
        <br />
      </div>
    </Wrapper>
  );
};

const parseDefaultCode = code => JSON.stringify(code, null, 3);

const LiveDemoContainer = compose(
  withProps({
    defaultCodeConfig: parseDefaultCode(setConfig),
    defaultCodeUpdateInventories: parseDefaultCode(updateInventories)
  }),
  lifecycle({
    componentDidMount() {
      window.addEventListener(onEquip, ({ detail = {} }) => {
        const { idInventory, idItem, isEquipped } = detail;
        window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updateItemsInventories](
          idInventory,
          [
            {
              id: idItem,
              isEquipped
            }
          ]
        );
      });

      window.addEventListener(onUse, ({ detail = {} }) => {
        const { idInventory, idItem, newQuantity } = detail;
        window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updateItemsInventories](
          idInventory,
          [
            {
              id: idItem,
              quantity: newQuantity
            }
          ]
        );
      });

      window.addEventListener(onDelete, ({ detail = {} }) => {
        const { idInventory, idItem, newQuantity } = detail;
        window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updateItemsInventories](
          idInventory,
          [
            {
              id: idItem,
              quantity: newQuantity
            }
          ]
        );
      });

      window.addEventListener(onTransfer, ({ detail = {} }) => {
        const {
          originInventoryId,
          destinationInventoryId,
          idItem,
          newQuantityOrigin,
          newQuantityDestination
        } = detail;
        window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updateItemsInventories](
          originInventoryId,
          [
            {
              id: idItem,
              quantity: newQuantityOrigin
            }
          ]
        );

        window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updateItemsInventories](
          destinationInventoryId,
          [
            {
              id: idItem,
              quantity: newQuantityDestination
            }
          ]
        );
      });
    }
  })
)(LiveDemo);

export default LiveDemoContainer;
