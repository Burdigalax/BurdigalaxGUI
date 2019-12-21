import React, { useState } from "react";
import AceEditor from "react-ace";

import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import { JS_FUNCTIONS } from "../../../../../../app/onShop/events";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";

export default ({ defaultCode }) => {
  const [codeConfig, setCodeConfig] = useState(defaultCode);

  const onSendConfig = () => {
    const data = JSON.parse(codeConfig);
    window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.setConfig](data);
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
    </div>
  );
};
