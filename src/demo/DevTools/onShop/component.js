import React from "react";

import { Wrapper } from "./styles";
import LiveDemo from "./components/LiveDemo";

const DevToolComponent = ({}) => {
  return (
    <Wrapper>
      Readme: Check github project :{" "}
      <a href="https://github.com/Burdigalax/BurdigalaxGUI" target="_blank">
        https://github.com/Burdigalax/BurdigalaxGUI
      </a>
      <br />
      <LiveDemo />
    </Wrapper>
  );
};

export default DevToolComponent;
