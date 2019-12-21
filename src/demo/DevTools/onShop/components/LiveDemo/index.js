import React, { useState } from "react";
import { connect } from "react-redux";

import { JS_FUNCTIONS } from "../../../../../app/onShop/events";
import { Button } from "./styles";
import selectCodeFromDevTool from "../../redux/reducers/selectors/select-code-from-devtool";
import SetConfig from "./components/setConfig";
import SetPaymentError from "./components/setPaymentError";
import SetPaymentSuccess from "./components/setPaymentSuccess";
import ResetBasket from "./components/resetBasket";
import UpdatePlayer from "./components/updatePlayer";
import UpdateArticles from "./components/updateArticles";

const LiveDemo = ({
  defaultCodeConfig,
  defaultCodePaymentError,
  defaultCodePaymentSuccess,
  defaultCodeUpdatePlayer,
  defaultCodeUpdateArticles
}) => {
  const [hasSetConfigOpen, setSetConfigOpen] = useState(false);
  const [hasSetPaymentErrorOpen, setSetPaymentErrorOpen] = useState(false);
  const [hasSetPaymentSuccessOpen, setSetPaymentSuccessOpen] = useState(false);
  const [hasResetBasketOpen, setResetBasketOpen] = useState(false);
  const [hasUdpatePlayerOpen, setUdpatePlayerOpen] = useState(false);
  const [hasUdpateArticlesOpen, setUdpateArticlesOpen] = useState(false);

  const toggleSetConfig = () => setSetConfigOpen(!hasSetConfigOpen);
  const toggleSetPaymentError = () =>
    setSetPaymentErrorOpen(!hasSetPaymentErrorOpen);
  const toggleSetPaymentSuccess = () =>
    setSetPaymentSuccessOpen(!hasSetPaymentSuccessOpen);
  const toggleResetBasket = () => setResetBasketOpen(!hasResetBasketOpen);
  const toggleUpdatePlayer = () => setUdpatePlayerOpen(!hasUdpatePlayerOpen);
  const toggleUpdateArticles = () =>
    setUdpateArticlesOpen(!hasUdpateArticlesOpen);

  return (
    <div>
      <h3>Live demo</h3>
      <Button onClick={toggleSetConfig}>{JS_FUNCTIONS.setConfig}</Button>
      {hasSetConfigOpen && <SetConfig defaultCode={defaultCodeConfig} />}
      <br />
      <Button onClick={toggleSetPaymentError} disableRipple>
        {JS_FUNCTIONS.setPaymentError}
      </Button>
      {hasSetPaymentErrorOpen && (
        <SetPaymentError defaultCode={defaultCodePaymentError} />
      )}
      <br />
      <Button onClick={toggleSetPaymentSuccess}>
        {JS_FUNCTIONS.setPaymentSuccess}
      </Button>
      {hasSetPaymentSuccessOpen && (
        <SetPaymentSuccess defaultCode={defaultCodePaymentSuccess} />
      )}
      <br />
      <Button onClick={toggleResetBasket}>{JS_FUNCTIONS.resetBasket}</Button>
      {hasResetBasketOpen && <ResetBasket />}
      <br />
      <Button onClick={toggleUpdatePlayer}>{JS_FUNCTIONS.updatePlayer}</Button>
      {hasUdpatePlayerOpen && (
        <UpdatePlayer defaultCode={defaultCodeUpdatePlayer} />
      )}
      <br />
      <Button onClick={toggleUpdateArticles}>
        {JS_FUNCTIONS.updateArticles}
      </Button>
      {hasUdpateArticlesOpen && (
        <UpdateArticles defaultCode={defaultCodeUpdateArticles} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const code = selectCodeFromDevTool(state);
  return {
    defaultCodeConfig: JSON.stringify(code.configEvent, null, 3),
    defaultCodePaymentError: JSON.stringify(code.paymentErrorEvent, null, 3),
    defaultCodePaymentSuccess: JSON.stringify(
      code.paymentSuccessEvent,
      null,
      3
    ),
    defaultCodeUpdatePlayer: JSON.stringify(code.updatePlayerEvent, null, 3),
    defaultCodeUpdateArticles: JSON.stringify(code.updateArticlesEvent, null, 3)
  };
};

const LiveDemoContainer = connect(mapStateToProps)(LiveDemo);

export default LiveDemoContainer;
