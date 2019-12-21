import { JS_FUNCTIONS } from "../../../../../../app/onShop/events";
import { BTN_COLOR } from "../../../../../../app/common/components/BurdiButton/constants";
import BurdiButton from "../../../../../../app/common/components/BurdiButton";
import React from "react";

export default ({}) => {
  const onResetBasket = () => {
    window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.resetBasket]();
  };
  return (
    <div>
      <BurdiButton
        onClick={onResetBasket}
        label={`${JS_FUNCTIONS.prefix}.${JS_FUNCTIONS.resetBasket}()`}
        color={BTN_COLOR.info}
      />
    </div>
  );
};
