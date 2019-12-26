import React from "react";

import { Wrapper } from "./styles";
import LiveDemo from "./components/LiveDemo";

const DevToolComponent = ({}) => {
  return (
    <Wrapper>
      <strong>Readme:</strong> Check github project :{" "}
      <a
        href="https://github.com/Burdigalax/BurdigalaxGUI/src/app/gasStation"
        target="_blank"
      >
        https://github.com/Burdigalax/BurdigalaxGUI/src/app/gasStation
      </a>
      <br />
      <LiveDemo />
    </Wrapper>
  );
};

export default DevToolComponent;
