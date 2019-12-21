import React, { useState } from "react";
import { JS_FUNCTIONS } from "../../../../../../app/onShop/events";
import AceEditor from "react-ace";
import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";

export default ({ defaultCode }) => {
  const [codeUpdatePlayer, setCodeUpdatePlayer] = useState(defaultCode);

  const onSendUpdatePlayer = () => {
    window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updatePlayer](
      JSON.parse(codeUpdatePlayer)
    );
  };
  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="github"
        width={"100%"}
        height={"90px"}
        value={codeUpdatePlayer}
        onChange={setCodeUpdatePlayer}
        name="JSON-UPDATE-PLAYER"
        editorProps={{ $blockScrolling: true }}
      />
      <BurdiButton
        onClick={onSendUpdatePlayer}
        label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.updatePlayer}()`}
        color={BTN_COLOR.info}
      />
    </div>
  );
};
