import React, { useState } from "react";

import OnShop from "../app/onShop";
import DevToolShop from "./DevTools/onShop";
import BurdiButton from "../app/common/components/BurdiButton";

const Demo = () => {
  const [hasShopOpen, setShop] = useState(true);
  const toggleShop = () => setShop(!hasShopOpen);

  return (
    <div style={{ margin: "15px" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

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
        onClick={toggleShop}
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
};

export default Demo;
