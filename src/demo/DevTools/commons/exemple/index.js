import React, { Fragment, useState } from "react";
import AceEditor from "react-ace";
import Button from "@material-ui/core/Button";

import BurdiButton from "../../../../app/common/components/BurdiButton";
import { BTN_COLOR } from "../../../../app/common/components/BurdiButton/constants";

const callEvent = (code, prefix, functionName) => {
  const data = code && JSON.parse(code);
  window[prefix][functionName](data);
};

export default ({
  defaultCode,
  functionName,
  nameExemple = "Exemple",
  prefix,
  onCallEvent
}) => {
  const [showEx, setShowEx] = useState(false);
  const [code, setCode] = useState(defaultCode);

  const onSend = () => {
    if (onCallEvent) return onCallEvent(JSON.parse(code), prefix, functionName);

    callEvent(code, prefix, functionName);
  };

  const toggleEx1 = () => setShowEx(!showEx);

  return (
    <div>
      {code && (
        <Fragment>
          <Button color="secondary" onClick={toggleEx1}>
            {showEx ? "Hide" : "Show"} {nameExemple}
          </Button>
          {showEx && (
            <div>
              <br />
              <AceEditor
                mode="javascript"
                theme="github"
                width={"100%"}
                maxLines={30}
                onChange={setCode}
                value={code}
                name={`JSON-${prefix}-${functionName}`}
                editorProps={{ $blockScrolling: true }}
              />
            </div>
          )}
        </Fragment>
      )}

      <BurdiButton
        onClick={onSend}
        label={`${prefix}.${functionName}()`}
        color={BTN_COLOR.info}
      />
    </div>
  );
};
