import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import { JS_FUNCTIONS } from "../../../../../app/onShop/events";
import { Button } from "./styles";
import selectCodeFromDevTool from "../../redux/reducers/selectors/select-code-from-devtool";
import Exemple from "../../../commons/exemple";
import fixtures2 from "../../redux/reducers/fixtures2";

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
  const [hasResetOpen, setResetOpen] = useState(false);
  const [hasUdpatePlayerOpen, setUdpatePlayerOpen] = useState(false);
  const [hasUdpateArticlesOpen, setUdpateArticlesOpen] = useState(false);

  const toggleSetConfig = () => setSetConfigOpen(!hasSetConfigOpen);
  const toggleSetPaymentError = () =>
    setSetPaymentErrorOpen(!hasSetPaymentErrorOpen);
  const toggleSetPaymentSuccess = () =>
    setSetPaymentSuccessOpen(!hasSetPaymentSuccessOpen);
  const toggleReset = () => setResetOpen(!hasResetOpen);
  const toggleUpdatePlayer = () => setUdpatePlayerOpen(!hasUdpatePlayerOpen);
  const toggleUpdateArticles = () =>
    setUdpateArticlesOpen(!hasUdpateArticlesOpen);

  return (
    <div>
      <h3>Live demo</h3>
      <Button onClick={toggleSetConfig}>{JS_FUNCTIONS.setConfig}</Button>
      {hasSetConfigOpen && (
        <Fragment>
          <Exemple
            defaultCode={defaultCodeConfig}
            functionName={JS_FUNCTIONS.setConfig}
            prefix={JS_FUNCTIONS.prefix}
            nameExemple={"Exemple 1"}
          />
          <Exemple
            defaultCode={JSON.stringify(fixtures2, null, 3)}
            functionName={JS_FUNCTIONS.setConfig}
            prefix={JS_FUNCTIONS.prefix}
            nameExemple={"Exemple 2"}
          />
        </Fragment>
      )}
      <br />
      <Button onClick={toggleSetPaymentError} disableRipple>
        {JS_FUNCTIONS.setPaymentError}
      </Button>
      {hasSetPaymentErrorOpen && (
        <Exemple
          defaultCode={defaultCodePaymentError}
          functionName={JS_FUNCTIONS.setPaymentError}
          prefix={JS_FUNCTIONS.prefix}
        />
      )}
      <br />
      <Button onClick={toggleSetPaymentSuccess}>
        {JS_FUNCTIONS.setPaymentSuccess}
      </Button>
      {hasSetPaymentSuccessOpen && (
        <Exemple
          defaultCode={defaultCodePaymentSuccess}
          functionName={JS_FUNCTIONS.setPaymentSuccess}
          prefix={JS_FUNCTIONS.prefix}
        />
      )}
      <br />
      <Button onClick={toggleReset}>{JS_FUNCTIONS.reset}</Button>
      {hasResetOpen && (
        <Exemple
          functionName={JS_FUNCTIONS.reset}
          prefix={JS_FUNCTIONS.prefix}
        />
      )}
      <br />
      <Button onClick={toggleUpdatePlayer}>{JS_FUNCTIONS.updatePlayer}</Button>
      {hasUdpatePlayerOpen && (
        <Exemple
          defaultCode={defaultCodeUpdatePlayer}
          functionName={JS_FUNCTIONS.updatePlayer}
          prefix={JS_FUNCTIONS.prefix}
        />
      )}
      <br />
      <Button onClick={toggleUpdateArticles}>
        {JS_FUNCTIONS.updateArticles}
      </Button>
      {hasUdpateArticlesOpen && (
        <Exemple
          defaultCode={defaultCodeUpdateArticles}
          functionName={JS_FUNCTIONS.updateArticles}
          prefix={JS_FUNCTIONS.prefix}
        />
      )}
    </div>
  );
};

const parseDefaultCode = code => JSON.stringify(code, null, 3);

const mapStateToProps = state => {
  const code = selectCodeFromDevTool(state);
  return {
    defaultCodeConfig: parseDefaultCode(code.configEvent),
    defaultCodePaymentError: parseDefaultCode(code.paymentErrorEvent),
    defaultCodePaymentSuccess: parseDefaultCode(code.paymentSuccessEvent),
    defaultCodeUpdatePlayer: parseDefaultCode(code.updatePlayerEvent),
    defaultCodeUpdateArticles: parseDefaultCode(code.updateArticlesEvent)
  };
};

const LiveDemoContainer = connect(mapStateToProps)(LiveDemo);

export default LiveDemoContainer;
