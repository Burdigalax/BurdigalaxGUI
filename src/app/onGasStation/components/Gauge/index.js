import { GaugeEmpty, GaugeFull, StaticGaugeEmpty } from "./styles";
import FuelIcon from "./Fuel";
import React, { Fragment } from "react";

export default ({ value = 0, bgColor = "#656565" }) => (
  <Fragment>
    <StaticGaugeEmpty>
      <GaugeEmpty value={value}>
        <FuelIcon />
      </GaugeEmpty>
    </StaticGaugeEmpty>
    <GaugeFull>
      <FuelIcon bgColor={bgColor} />
    </GaugeFull>
  </Fragment>
);
