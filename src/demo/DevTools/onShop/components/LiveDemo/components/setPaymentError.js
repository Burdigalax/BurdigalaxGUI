import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import { JS_FUNCTIONS } from "../../../../../../app/onShop/events";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";
import React, { useState } from "react";
import AceEditor from "react-ace";

export default ({ defaultCode }) => {
  const [codePaymentError, setCodePaymentError] = useState(defaultCode);
  const onSendPaymentError = () => {
    const event = JSON.parse(codePaymentError);
    window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.setPaymentError](
      event.title,
      event.message,
      event.iconUrl
    );
  };

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="github"
        width={"100%"}
        height={"60px"}
        value={codePaymentError}
        onChange={setCodePaymentError}
        name="JSON-PAYMENT-ERROR"
        editorProps={{ $blockScrolling: true }}
      />
      <BurdiButton
        onClick={onSendPaymentError}
        label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.setPaymentError}()`}
        color={BTN_COLOR.info}
      />
    </div>
  );
};
