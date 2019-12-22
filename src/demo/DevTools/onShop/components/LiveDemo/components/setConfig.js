import React, { useState } from "react";
import AceEditor from "react-ace";
import Button from "@material-ui/core/Button";

import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import { JS_FUNCTIONS } from "../../../../../../app/onShop/events";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";
import fixtures2 from "../../../redux/reducers/fixtures2";

const callEvent = code => {
  const data = JSON.parse(code);
  window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.setConfig](data);
};

export default ({ defaultCode }) => {
  const [showEx1, setShowEx1] = useState(false);
  const [showEx2, setShowEx2] = useState(false);
  const [codeConfig, setCodeConfig] = useState(defaultCode);
  const [codeConfig2, setCodeConfig2] = useState(
    JSON.stringify(fixtures2, null, 3)
  );

  const onSendConfig = () => {
    callEvent(codeConfig);
  };

  const onSendConfig2 = () => {
    callEvent(codeConfig2);
  };

  const toggleEx1 = () => setShowEx1(!showEx1);
  const toggleEx2 = () => setShowEx2(!showEx2);

  return (
    <div>
      <Button color="secondary" onClick={toggleEx1}>
        Exemple 1
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
      <Button color="secondary" onClick={toggleEx2}>
        Exemple 2
      </Button>
      {showEx2 && (
        <div>
          <br />
          <AceEditor
            mode="javascript"
            theme="github"
            width={"100%"}
            onChange={setCodeConfig2}
            value={codeConfig2}
            name="JSON-SHOP-2"
            editorProps={{ $blockScrolling: true }}
          />
          <BurdiButton
            onClick={onSendConfig2}
            label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.setConfig}() - Exemple 2`}
            color={BTN_COLOR.info}
          />
        </div>
      )}
    </div>
  );
};
