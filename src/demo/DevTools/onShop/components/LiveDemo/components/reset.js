import { JS_FUNCTIONS } from "../../../../../../app/onShop/events";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";
import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import React from "react";

export default ({}) => {
  const onReset = () => {
    window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.reset]();
  };
  return (
    <div>
      <BurdiButton
        onClick={onReset}
        label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.reset}()`}
        color={BTN_COLOR.info}
      />
    </div>
  );
};
