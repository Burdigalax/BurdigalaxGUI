import React, { useState } from "react";
import { connect } from "react-redux";

import { JS_FUNCTIONS } from "../../../../../app/onShop/events";
import { Button } from "./styles";
import SetConfig from "./components/setConfig";
import selectDefaultCode from "../../redux/reducers/selectors/select-default-code";

const LiveDemo = ({ defaultCodeConfig }) => {
  const [hasSetConfigOpen, setSetConfigOpen] = useState(false);

  const toggleSetConfig = () => setSetConfigOpen(!hasSetConfigOpen);

  return (
    <div>
      <h3>Live demo</h3>
      <Button onClick={toggleSetConfig}>{JS_FUNCTIONS.setConfig}</Button>
      {hasSetConfigOpen && <SetConfig defaultCode={defaultCodeConfig} />}
      <br />
    </div>
  );
};

const mapStateToProps = state => {
  const defaultCode = selectDefaultCode(state);
  return {
    defaultCodeConfig: JSON.stringify(defaultCode.setConfig, null, 3)
  };
};

const LiveDemoContainer = connect(mapStateToProps)(LiveDemo);

export default LiveDemoContainer;
