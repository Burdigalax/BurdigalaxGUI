import React, { useState } from "react";
import AceEditor from "react-ace";

import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import { JS_FUNCTIONS } from "../../../../../../app/onShop/events";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";
import fixtures2 from "../../../redux/reducers/fixtures2";

const callEvent = code => {
  const data = JSON.parse(code);
  window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.setConfig](data);
};

console.log("fixtures2", fixtures2);

export default ({ defaultCode }) => {
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

  return (
    <div>
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
      </div>
      <BurdiButton
        onClick={onSendConfig}
        label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.setConfig}()`}
        color={BTN_COLOR.info}
      />
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
      </div>
      <BurdiButton
        onClick={onSendConfig2}
        label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.setConfig}() - Exemple 2`}
        color={BTN_COLOR.info}
      />
    </div>
  );
};
