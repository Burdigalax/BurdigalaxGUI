import React from "react";
import { compose, withState } from "recompose";

import OnShop from "../app/onShop";
import DevToolShop from "./DevTools/onShop";
import BurdiButton from "../app/common/components/BurdiButton";

const Demo = ({ hasShopOpen = false, setShop = Function.prototype }) => (
  <div style={{ margin: "15px" }}>
    <h1>Burdigalax</h1>
    <div>
      <h2>
        Contact: <br />
      </h2>
      <li>
        <strong> Discord </strong>RomBurdi#9770
      </li>
    </div>
    <br />
    <BurdiButton
      label={hasShopOpen ? "Hide Shop" : "Show Shop"}
      onClick={() => setShop(!hasShopOpen)}
    />
    {hasShopOpen && (
      <div style={{ marginLeft: "15px" }}>
        <h1>Shop :</h1>
        <DevToolShop />
        <OnShop />
      </div>
    )}
  </div>
);

const DemoContainer = compose(withState("hasShopOpen", "setShop", true))(Demo);

export default DemoContainer;
