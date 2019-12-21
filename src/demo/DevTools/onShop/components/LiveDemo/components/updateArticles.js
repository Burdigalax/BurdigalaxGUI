import React, { useState } from "react";
import { JS_FUNCTIONS } from "../../../../../../app/onShop/events";
import AceEditor from "react-ace";
import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";

export default ({ defaultCode }) => {
  const [codeUpdateArticles, setCodeUpdateArticles] = useState(defaultCode);

  const onSendUpdateArticles = data => {
    window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.updateArticles](JSON.parse(data));
  };

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="github"
        width={"100%"}
        height={"90px"}
        value={codeUpdateArticles}
        onChange={setCodeUpdateArticles}
        name="JSON-UPDATE-ARTICLES"
        editorProps={{ $blockScrolling: true }}
      />
      <BurdiButton
        onClick={onSendUpdateArticles}
        label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.updateArticles}()`}
        color={BTN_COLOR.info}
      />
    </div>
  );
};
