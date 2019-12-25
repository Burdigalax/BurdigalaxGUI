import { GaugeEmpty, GaugeFull, StaticGaugeEmpty } from "./styles";
import FuelIcon from "./Fuel";
import ElectricIcon from "./Electric";
import React, { Fragment } from "react";

export default ({
  value = 0,
  bgColor = "#656565",
  maxValue = 100,
  type = "fuel"
}) => (
  <Fragment>
    <StaticGaugeEmpty>
      <GaugeEmpty value={value} maxValue={maxValue}>
        {type === "electric" ? <ElectricIcon /> : <FuelIcon />}
      </GaugeEmpty>
    </StaticGaugeEmpty>
    <GaugeFull>
      {type === "electric" ? (
        <ElectricIcon bgColor={bgColor} />
      ) : (
        <FuelIcon bgColor={bgColor} />
      )}
    </GaugeFull>
  </Fragment>
);
