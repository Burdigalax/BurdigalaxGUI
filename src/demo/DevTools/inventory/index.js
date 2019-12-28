import React, { useState } from "react";
import { compose, lifecycle, withProps } from "recompose";

import {
  JS_FUNCTIONS,
  onEquip,
  onUse,
  onDelete
} from "../../../app/inventory/events";
import Exemple from "../commons/exemple/";
import { Button, Wrapper } from "./styles";
import fixtures from "./fixtures";

const LiveDemo = ({ defaultCodeConfig }) => {
  const [hasSetConfigOpen, setSetConfigOpen] = useState(false);

  const toggleSetConfig = () => setSetConfigOpen(!hasSetConfigOpen);

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
      </div>
    </Wrapper>
  );
};

const parseDefaultCode = code => JSON.stringify(code, null, 3);

const LiveDemoContainer = compose(
  withProps({
    defaultCodeConfig: parseDefaultCode(fixtures)
  }),
  lifecycle({
    componentDidMount() {
      window.addEventListener(onEquip, ({ detail = {} }) => {
        const { id, isEquipped } = detail;
        window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updateItemsInventory]([
          {
            id,
            isEquipped
          }
        ]);
      });

      window.addEventListener(onUse, ({ detail = {} }) => {
        const { id, newQuantity } = detail;
        window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updateItemsInventory]([
          {
            id,
            quantity: newQuantity
          }
        ]);
      });

      window.addEventListener(onDelete, ({ detail = {} }) => {
        const { id, newQuantity } = detail;
        window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updateItemsInventory]([
          {
            id,
            quantity: newQuantity
          }
        ]);
      });
    }
  })
)(LiveDemo);

export default LiveDemoContainer;
