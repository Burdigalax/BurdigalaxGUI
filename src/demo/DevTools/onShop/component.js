import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { mergeDeepRight } from "ramda";

import BurdiButton from "../../../app/common/components/BurdiButton";
import { BTN_COLOR } from "../../../app/common/components/BurdiButton/constants";
import { Code, EditTool, Link, Wrapper } from "./styles";
import fixtures from "./redux/reducers/fixtures";
import jsonEmitedExemple from "./jsonEmitedExemple";
import defaultFixtures from "../../../app/onShop/redux/reducers/config/fixturesShop";
import {
  config as configEvent,
  cashPayment,
  cardPayment,
  contactLessPayment,
  paymentError,
  onClose,
  paymentSuccess,
  resetBasket,
  updatePlayer,
  updateArticles
} from "../../../app/onShop/events";

const allFixtures = mergeDeepRight(defaultFixtures, fixtures);

const exemple = `window.dispatchEvent(new CustomEvent("${configEvent}", { detail: JSON }));`;

const errorEvent = `window.dispatchEvent(new CustomEvent("${paymentError}", { detail: 
  { title: 'Erreur', message: "Vous n'avez pas assez d'argent", iconUrl: "//Optional use for override config."} 
}));`;
const successEvent = `window.dispatchEvent(new CustomEvent("${paymentSuccess}", { detail: 
  { title: 'Félicitation', message: "Paiement validé", iconUrl: "//Optional use for override config."} 
}));`;

const resetBasketEvent = `window.dispatchEvent(new CustomEvent("${resetBasket}"));`;

const updatePlayerEvent = `window.dispatchEvent(new CustomEvent("${updatePlayer}", { detail: 
  {
     "money": {
        "cash": 500
     },
     "freeStorageSpace": 200
  } 
}));`;

const updateArticlesEvent = `window.dispatchEvent(new CustomEvent("${updateArticles}", { detail: 
  [
    {
        "id": 1,
        "quantity": 10,
    },
  ]
}));`;

const DevToolComponent = ({
  onSend,
  onEdit,
  newCodeConfigEvent,
  newCodePaymentErrorEvent,
  newCodePaymentSuccessEvent,
  newCodeUpdatePlayerEvent,
  newCodeUpdateArticlesEvent,
  setPaymentError,
  setPaymentSuccess,
  onChangeConfigEvent,
  onChangePaymentErrorEvent,
  onChangePaymentSuccessEvent,
  onChangeUpdatePlayerEvent,
  onChangeUpdateArticlesEvent,
  hasEditToolOpen,
  setResetRequest,
  setUpdatePlayer,
  setUpdateArticles
}) => {
  const [hasExampleConfigOpen, setHasExampleConfigOpen] = useState(false);
  const [hasJsonEventEmittedOpen, setHasJsonEventEmittedOpen] = useState(false);
  const [hasDefaultConfigJsonOpen, setHasDefaultConfigJsonOpen] = useState(
    false
  );
  const [hasAllConfigJsonOpen, setHasAllConfigJsonOpen] = useState(false);

  return (
    <Wrapper>
      <h3>Readme</h3>
      <ul>
        <li>
          IconUrl : Use SVG (mandatory for dynamic color) or PNG (static color)
        </li>
        <li>
          Set config with dispatch event:
          <AceEditor
            mode="javascript"
            theme="github"
            width={"100%"}
            height="20px"
            showGutter={false}
            value={exemple}
            name="JSON-EXAMPLE-EVENT-CONFIG"
          />
          <Link onClick={() => setHasExampleConfigOpen(!hasExampleConfigOpen)}>
            {" "}
            Show JSON Exemple{" "}
          </Link>
          {hasExampleConfigOpen && (
            <AceEditor
              mode="javascript"
              theme="github"
              width={"100%"}
              value={JSON.stringify(fixtures, null, 3)}
              name="JSON-EXAMPLE-CONFIG"
              editorProps={{ $blockScrolling: true }}
            />
          )}
        </li>
        <li style={{ marginTop: "10px" }}>
          List of issuables events :
          <ul>
            <li>
              <Code>{onClose}</Code>
              <br />
            </li>
            <li>
              <Code>{cashPayment}</Code>
              <br />
              <Code>{contactLessPayment}</Code>
              <br />
              <Code>{cardPayment}</Code>
              <br />
              <Link
                onClick={() =>
                  setHasJsonEventEmittedOpen(!hasJsonEventEmittedOpen)
                }
              >
                {" "}
                Show JSON received{" "}
              </Link>
              {hasJsonEventEmittedOpen && (
                <AceEditor
                  mode="javascript"
                  theme="github"
                  height={"250px"}
                  width={"100%"}
                  value={JSON.stringify(jsonEmitedExemple, null, 3)}
                  name="JSON-EXAMPLE-EMITABLES-PAYMENT"
                />
              )}
            </li>
          </ul>
        </li>
        <li>
          List of listened events :
          <ul>
            <li>
              <Code>{configEvent}</Code>
              <br />
              The configuration you send will be merged with the default
              configuration :
              <Link
                onClick={() =>
                  setHasDefaultConfigJsonOpen(!hasDefaultConfigJsonOpen)
                }
              >
                Show default JSON value
              </Link>
              {hasDefaultConfigJsonOpen && (
                <AceEditor
                  mode="javascript"
                  theme="github"
                  height={"250px"}
                  width={"100%"}
                  value={JSON.stringify(defaultFixtures, null, 3)}
                  name="DEFAULT-JSON-CONFIG"
                />
              )}
              <br />
              Here is the list of all editable parameters :
              <Link
                onClick={() => setHasAllConfigJsonOpen(!hasAllConfigJsonOpen)}
              >
                Show ALL JSON
              </Link>
              {hasAllConfigJsonOpen && (
                <AceEditor
                  mode="javascript"
                  theme="github"
                  height={"250px"}
                  width={"100%"}
                  value={JSON.stringify(allFixtures, null, 3)}
                  name="ALL-JSON-CONFIG"
                />
              )}
            </li>
            <li>
              <Code>{paymentError}</Code>
              <AceEditor
                mode="javascript"
                theme="github"
                width={"100%"}
                height="60px"
                showGutter={false}
                value={errorEvent}
                name="JSON-EXAMPLE-EVENT-PAYMENT-ERROR"
              />
              <Code>{paymentSuccess}</Code>
              <AceEditor
                mode="javascript"
                theme="github"
                width={"100%"}
                height="60px"
                showGutter={false}
                value={successEvent}
                name="JSON-EXAMPLE-EVENT-PAYMENT-SUCCESS"
              />
              <br />
            </li>
            <li>
              <Code>{resetBasket}</Code>
              <AceEditor
                mode="javascript"
                theme="github"
                width={"100%"}
                height="30px"
                showGutter={false}
                value={resetBasketEvent}
                name="JSON-EXAMPLE-EVENT-RESET-BASKET"
              />
              <br />
            </li>
            <li>
              <Code>{updatePlayer}</Code>
              <AceEditor
                mode="javascript"
                theme="github"
                width={"100%"}
                height="115px"
                showGutter={false}
                value={updatePlayerEvent}
                name="JSON-EXAMPLE-EVENT-UPDATE-PLAYER"
              />
              <br />
              <Code>{updateArticles}</Code>
              <p>
                <strong style={{ color: "red" }}>WARNING:</strong>Update
                Articles not update basket for this moment. I recommend using it
                with action : {resetBasket}
              </p>
              <AceEditor
                mode="javascript"
                theme="github"
                width={"100%"}
                height="115px"
                showGutter={false}
                value={updateArticlesEvent}
                name="JSON-EXAMPLE-EVENT-UPDATE-ARTICLES"
              />
              <br />
            </li>
          </ul>
        </li>
      </ul>
      <h3>Live demo</h3>
      <Link onClick={onEdit}>
        {hasEditToolOpen ? "Hide" : "Show"} JSON Config{" "}
      </Link>
      {hasEditToolOpen ? (
        <EditTool>
          <AceEditor
            mode="javascript"
            theme="github"
            width={"100%"}
            onChange={onChangeConfigEvent}
            value={newCodeConfigEvent}
            name="JSON-SHOP"
            editorProps={{ $blockScrolling: true }}
          />
        </EditTool>
      ) : null}

      <BurdiButton
        onClick={onSend}
        label={`Dispatch event ${configEvent}`}
        color={BTN_COLOR.info}
      />

      <br />
      <AceEditor
        mode="javascript"
        theme="github"
        width={"100%"}
        height={"60px"}
        value={newCodePaymentErrorEvent}
        onChange={onChangePaymentErrorEvent}
        name="JSON-PAYMENT-ERROR"
        editorProps={{ $blockScrolling: true }}
      />
      <BurdiButton
        onClick={setPaymentError}
        label={`Dispatch event  ${paymentError}`}
        color={BTN_COLOR.info}
      />

      <br />
      <AceEditor
        mode="javascript"
        theme="github"
        width={"100%"}
        height={"60px"}
        value={newCodePaymentSuccessEvent}
        onChange={onChangePaymentSuccessEvent}
        name="JSON-PAYMENT-SUCCESS"
        editorProps={{ $blockScrolling: true }}
      />
      <BurdiButton
        onClick={setPaymentSuccess}
        label={`Dispatch event ${paymentSuccess}`}
        color={BTN_COLOR.info}
      />

      <br />
      <BurdiButton
        onClick={setResetRequest}
        label={`Dispatch event ${resetBasket}`}
        color={BTN_COLOR.info}
      />

      <br />
      <AceEditor
        mode="javascript"
        theme="github"
        width={"100%"}
        height={"90px"}
        value={newCodeUpdatePlayerEvent}
        onChange={onChangeUpdatePlayerEvent}
        name="JSON-PAYMENT-UPDATE-PLAYER"
        editorProps={{ $blockScrolling: true }}
      />
      <BurdiButton
        onClick={setUpdatePlayer}
        label={`Dispatch event ${updatePlayer}`}
        color={BTN_COLOR.info}
      />

      <br />
      <AceEditor
        mode="javascript"
        theme="github"
        width={"100%"}
        height={"90px"}
        value={newCodeUpdateArticlesEvent}
        onChange={onChangeUpdateArticlesEvent}
        name="JSON-PAYMENT-UPDATE-ARTICLES"
        editorProps={{ $blockScrolling: true }}
      />
      <BurdiButton
        onClick={setUpdateArticles}
        label={`Dispatch event ${updateArticles}`}
        color={BTN_COLOR.info}
      />
    </Wrapper>
  );
};

export default DevToolComponent;
