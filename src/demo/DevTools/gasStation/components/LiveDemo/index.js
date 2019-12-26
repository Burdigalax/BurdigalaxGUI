import React, { useState } from "react";
import { connect } from "react-redux";

import { JS_FUNCTIONS } from "../../../../../app/gasStation/events";
import { Button } from "./styles";
import selectDefaultCode from "../../redux/reducers/selectors/select-default-code";
import Exemple from "../../../commons/exemple/";

const LiveDemo = ({
  defaultCodeConfig,
  defaultCodeUpdatePlayer,
  defaultCodeUpdateStation,
  defaultCodeUpdateGases,
  defaultCodeSetPaymentError
}) => {
  const [hasSetConfigOpen, setSetConfigOpen] = useState(false);
  const [hasUpdatePlayerOpen, setUpdatePlayerOpen] = useState(false);
  const [hasUpdateStationOpen, setUpdateStationOpen] = useState(false);
  const [hasUpdateGasesOpen, setUpdateGasesOpen] = useState(false);
  const [hasSetPaymentErrorOpen, setPaymentErrorOpen] = useState(false);

  const toggleSetConfig = () => setSetConfigOpen(!hasSetConfigOpen);
  const toggleUpdatePlayer = () => setUpdatePlayerOpen(!hasUpdatePlayerOpen);
  const toggleUpdateStation = () => setUpdateStationOpen(!hasUpdateStationOpen);
  const toggleUpdateGases = () => setUpdateGasesOpen(!hasUpdateGasesOpen);
  const toggleSetPaymentError = () =>
    setPaymentErrorOpen(!hasSetPaymentErrorOpen);

  return (
    <div>
      <h3>Live demo</h3>
      <Button onClick={toggleSetConfig}>{JS_FUNCTIONS.setConfig}</Button>
      {hasSetConfigOpen && (
        <Exemple
          defaultCode={defaultCodeConfig}
          prefix={JS_FUNCTIONS.prefix}
          functionName={JS_FUNCTIONS.setConfig}
        />
      )}
      <br />
      <Button onClick={toggleUpdatePlayer}>{JS_FUNCTIONS.updatePlayer}</Button>
      {hasUpdatePlayerOpen && (
        <Exemple
          defaultCode={defaultCodeUpdatePlayer}
          prefix={JS_FUNCTIONS.prefix}
          functionName={JS_FUNCTIONS.updatePlayer}
        />
      )}
      <br />
      <Button onClick={toggleUpdateStation}>
        {JS_FUNCTIONS.updateStation}
      </Button>
      {hasUpdateStationOpen && (
        <Exemple
          defaultCode={defaultCodeUpdateStation}
          prefix={JS_FUNCTIONS.prefix}
          functionName={JS_FUNCTIONS.updateStation}
        />
      )}
      <br />
      <Button onClick={toggleUpdateGases}>{JS_FUNCTIONS.updateGases}</Button>
      {hasUpdateGasesOpen && (
        <Exemple
          defaultCode={defaultCodeUpdateGases}
          prefix={JS_FUNCTIONS.prefix}
          functionName={JS_FUNCTIONS.updateGases}
        />
      )}
      <br />
      <Button onClick={toggleSetPaymentError}>
        {JS_FUNCTIONS.setPaymentError}
      </Button>
      {hasSetPaymentErrorOpen && (
        <Exemple
          defaultCode={defaultCodeSetPaymentError}
          prefix={JS_FUNCTIONS.prefix}
          functionName={JS_FUNCTIONS.setPaymentError}
        />
      )}
      <br />
    </div>
  );
};

const parseDefaultCode = code => JSON.stringify(code, null, 3);

const mapStateToProps = state => {
  const defaultCode = selectDefaultCode(state);
  return {
    defaultCodeConfig: parseDefaultCode(defaultCode.setConfig),
    defaultCodeUpdatePlayer: parseDefaultCode(defaultCode.updatePlayer),
    defaultCodeUpdateStation: parseDefaultCode(defaultCode.updateStation),
    defaultCodeUpdateGases: parseDefaultCode(defaultCode.updateGases),
    defaultCodeSetPaymentError: parseDefaultCode(defaultCode.setPaymentError)
  };
};

const LiveDemoContainer = connect(mapStateToProps)(LiveDemo);

export default LiveDemoContainer;
