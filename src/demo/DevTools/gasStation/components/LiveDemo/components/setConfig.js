import React, { useState } from "react";
import AceEditor from "react-ace";
import Button from "@material-ui/core/Button";

import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import { JS_FUNCTIONS } from "../../../../../../app/gasStation/events";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";

const callEvent = code => {
  const data = JSON.parse(code);
  window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.setConfig](data);
};

export default ({ defaultCode }) => {
  const [showEx1, setShowEx1] = useState(false);
  const [codeConfig, setCodeConfig] = useState(defaultCode);

  const onSendConfig = () => {
    callEvent(codeConfig);
  };

  const toggleEx1 = () => setShowEx1(!showEx1);

  return (
    <div>
      <Button color="secondary" onClick={toggleEx1}>
        Exemple
      </Button>
      {showEx1 && (
        <div>
          <br />
          <AceEditor
            mode="javascript"
            theme="github"
            width={"100%"}
            onChange={setCodeConfig}
            value={codeConfig}
            name="JSON-SHOP"
            editorProps={{ $blockScrolling: true }}
          />
          <BurdiButton
            onClick={onSendConfig}
            label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.setConfig}()`}
            color={BTN_COLOR.info}
          />
        </div>
      )}
    </div>
  );
};
