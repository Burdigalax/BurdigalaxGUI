import React, { useState } from "react";
import { withProps } from "recompose";

import { JS_FUNCTIONS } from "../../../app/inventory/events";
import Exemple from "../commons/exemple/";
import { Button, Wrapper } from "./styles";

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

const LiveDemoContainer = withProps({
  defaultCodeConfig: parseDefaultCode({})
})(LiveDemo);

export default LiveDemoContainer;
