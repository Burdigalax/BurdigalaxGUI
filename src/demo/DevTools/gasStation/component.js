import React from "react";

import { Wrapper } from "./styles";
import LiveDemo from "./components/LiveDemo";

const DevToolComponent = ({}) => {
  return (
    <Wrapper>
      <p>
        <a
          href={"https://www.youtube.com/watch?v=eApDNChZuNs"}
          target={"_blank"}
        >
          Youtube presentation
        </a>
      </p>
      <strong>Readme:</strong> Check github project :{" "}
      <a
        href="https://github.com/Burdigalax/BurdigalaxGUI/tree/master/src/app/gasStation"
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
