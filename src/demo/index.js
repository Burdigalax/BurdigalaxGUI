import React, { useState } from "react";

import OnShop from "../app/onShop";
import GasStation from "../app/gasStation";
import DevToolShop from "./DevTools/onShop";
import BurdiButton from "../app/common/components/BurdiButton";
import DevToolGasStation from "./DevTools/gasStation";

const Demo = () => {
  const [hasShopOpen, setShop] = useState(false);
  const [hasGasStationOpen, setGasStation] = useState(false);

  const toggleGasStation = () => setGasStation(!hasGasStationOpen);
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
        <div
          style={{
            marginLeft: "15px"
          }}
        >
          <h1>Shop :</h1>
          <DevToolShop />
          <div
            style={{
              padding: "15px",
              background:
                "url('http://bastienwilmotte.be/aieki/on7/shop-bg.jpg') no-repeat center center",
              backgroundSize: "cover"
            }}
          >
            <OnShop />
          </div>
        </div>
      )}
      <BurdiButton
        label={hasShopOpen ? "Hide GasStation" : "Show GasStation"}
        onClick={toggleGasStation}
      />
      {hasGasStationOpen && (
        <div>
          <h1>Gas Station :</h1>
          <DevToolGasStation />
          <GasStation />
        </div>
      )}
    </div>
  );
};

export default Demo;
