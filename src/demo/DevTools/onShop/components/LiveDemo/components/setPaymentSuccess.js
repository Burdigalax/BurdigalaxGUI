import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import { JS_FUNCTIONS } from "../../../../../../app/onShop/events";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";
import React, { useState } from "react";
import AceEditor from "react-ace";

export default ({ defaultCode }) => {
  const [codePaymentSuccess, setCodePaymentSuccess] = useState(defaultCode);
  const onSendPaymentSuccess = () => {
    const event = JSON.parse(codePaymentSuccess);
    window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.setPaymentSuccess](
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
        value={codePaymentSuccess}
        onChange={setCodePaymentSuccess}
        name="JSON-PAYMENT-SUCCESS"
        editorProps={{ $blockScrolling: true }}
      />
      <BurdiButton
        onClick={onSendPaymentSuccess}
        label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.setPaymentSuccess}()`}
        color={BTN_COLOR.info}
      />
    </div>
  );
};
