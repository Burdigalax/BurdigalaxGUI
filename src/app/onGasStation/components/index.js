import React, { useEffect, useState } from "react";
import { compose, withState, lifecycle } from "recompose";

import {
  Action,
  Interface,
  InfoTitle,
  SelectGas,
  Gas,
  GasTitle,
  TotalTTC,
  WrapperGauge,
  Total,
  Warning,
  Informations,
  Line,
  FuelLevel,
  WrapperPayment,
  List,
  Buy,
  BuyButton,
  Tax
} from "./styles";
import Icon from "../../common/components/Icon";
import Header from "./Header";
import Gauge from "./Gauge";
import Payment from "./Payment";
import { BTN_VARIANT } from "../../common/components/BurdiButton/constants";

let interval;
const price = 1.586;
export default ({ defaultCount = 10, moneyAvailable = 15000 }) => {
  const [gasSelected, setGasSelected] = useState("");
  const [isOnBuy, setIsOnBuy] = useState(false);
  const [countBuy, setCountBuy] = useState(0);

  const buy = () => {
    setIsOnBuy(true);
    interval = setInterval(() => {
      setCountBuy(value => value + 1);
    }, 100);
  };

  const stopBuy = () => {
    setIsOnBuy(false);
    clearInterval(interval);
  };

  return (
    <Interface>
      <Header hasCloseButton />
      <SelectGas>
        <Gas
          bgColorSelected={"#fdfdb7"}
          onClick={() => setGasSelected("GASOIL")}
          isSelected={gasSelected === "GASOIL"}
        >
          <Icon
            color={"#eac718"}
            url={
              "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTY2LjEyMSw0Mi42NTFjLTYuMDg1LTkuMTc2LTEyLjk3OS0xOS41NjgtMTUuMjE2LTM3LjIyQzQ4LjY2NiwyMy4wOCw0MS43NzIsMzMuNDc2LDM1LjY4OCw0Mi42NSAgYy01LjU3OSw4LjQxMS0xMC4zOTcsMTUuNjc2LTEwLjM5NywyNi42NTVjMCwxMy45MywxMS40OTEsMjUuMjYzLDI1LjYxNCwyNS4yNjNjMTQuMTIzLDAsMjUuNjEyLTExLjMzMywyNS42MTItMjUuMjYzICBDNzYuNTE4LDU4LjMyNyw3MS43LDUxLjA2Myw2Ni4xMjEsNDIuNjUxeiBNNTMuMTkyLDg3LjI0NGwtMC43NTItMS44NTRjNi43MzctMi43MywxMi4wMjUtOC4xNDgsMTQuNTA5LTE0Ljg2NGwxLjg3NSwwLjY5MyAgQzY2LjE0Nyw3OC40NjMsNjAuNDQ5LDg0LjMwMyw1My4xOTIsODcuMjQ0eiI+PC9wYXRoPjxwYXRoIGQ9Ik04Ny43LDMwLjgwNGMtMy45NDQtNS45NDgtOC4zODItMTIuNjM5LTEwLjE4My0yMy41NDhjLTEuNzk5LDEwLjkwNi02LjIzNiwxNy41OTgtMTAuMTgxLDIzLjU0NiAgYy0xLjE1NiwxLjc0My0yLjI0NywzLjM5OS0zLjIyNSw1LjA4YzEuMjI5LDEuOTY3LDIuNDY4LDMuODQzLDMuNjc2LDUuNjY0YzUuMTczLDcuOCw5LjY5OSwxNC42NTQsMTAuNTY3LDI0LjM2NCAgYzkuMTMxLTAuNDM1LDE2LjQyOS03Ljg3NCwxNi40MjktMTYuOTg0Qzk0Ljc4NCw0MS40ODQsOTEuNTAyLDM2LjUzNSw4Ny43LDMwLjgwNHoiPjwvcGF0aD48cGF0aCBkPSJNNS4yMTYsNjMuMjM3YzAsNy45MTcsNi41MzMsMTQuMzU3LDE0LjU2MywxNC4zNTdjMS41NzEsMCwzLjEwOC0wLjI2Nyw0LjU5LTAuNzY1Yy0wLjY5Ny0yLjM5Mi0xLjA3OC00LjkxNC0xLjA3OC03LjUyNCAgYzAtOC4xMTUsMi40NDUtMTQuMjI1LDUuODg3LTIwLjE0MmMtMC4yODEtMC40MjktMC41NjItMC44NTUtMC44NS0xLjI5MWMtMy4yNjYtNC45MjYtNi45MjctMTAuNDQ5LTguNTQ5LTE5LjI3OCAgYy0xLjYyMiw4LjgzMi01LjI4NSwxNC4zNTYtOC41NTIsMTkuMjgzQzguMDAxLDUyLjc0MSw1LjIxNiw1Ni45NDEsNS4yMTYsNjMuMjM3eiI+PC9wYXRoPjwvc3ZnPg=="
            }
            size={40}
          />
          <GasTitle color={"#eac718"}>GASOIL</GasTitle>
          <Total>0.390 $/L</Total>
          <Tax value={75}>+75%</Tax>
          <TotalTTC>1.561 $/L</TotalTTC>
        </Gas>
        <Gas
          bgColorSelected={"#fbeed8"}
          onClick={() => setGasSelected("GASOIL+")}
          isSelected={gasSelected === "GASOIL+"}
        >
          <Icon
            color={"#efa215"}
            url={
              "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTY2LjEyMSw0Mi42NTFjLTYuMDg1LTkuMTc2LTEyLjk3OS0xOS41NjgtMTUuMjE2LTM3LjIyQzQ4LjY2NiwyMy4wOCw0MS43NzIsMzMuNDc2LDM1LjY4OCw0Mi42NSAgYy01LjU3OSw4LjQxMS0xMC4zOTcsMTUuNjc2LTEwLjM5NywyNi42NTVjMCwxMy45MywxMS40OTEsMjUuMjYzLDI1LjYxNCwyNS4yNjNjMTQuMTIzLDAsMjUuNjEyLTExLjMzMywyNS42MTItMjUuMjYzICBDNzYuNTE4LDU4LjMyNyw3MS43LDUxLjA2Myw2Ni4xMjEsNDIuNjUxeiBNNTMuMTkyLDg3LjI0NGwtMC43NTItMS44NTRjNi43MzctMi43MywxMi4wMjUtOC4xNDgsMTQuNTA5LTE0Ljg2NGwxLjg3NSwwLjY5MyAgQzY2LjE0Nyw3OC40NjMsNjAuNDQ5LDg0LjMwMyw1My4xOTIsODcuMjQ0eiI+PC9wYXRoPjxwYXRoIGQ9Ik04Ny43LDMwLjgwNGMtMy45NDQtNS45NDgtOC4zODItMTIuNjM5LTEwLjE4My0yMy41NDhjLTEuNzk5LDEwLjkwNi02LjIzNiwxNy41OTgtMTAuMTgxLDIzLjU0NiAgYy0xLjE1NiwxLjc0My0yLjI0NywzLjM5OS0zLjIyNSw1LjA4YzEuMjI5LDEuOTY3LDIuNDY4LDMuODQzLDMuNjc2LDUuNjY0YzUuMTczLDcuOCw5LjY5OSwxNC42NTQsMTAuNTY3LDI0LjM2NCAgYzkuMTMxLTAuNDM1LDE2LjQyOS03Ljg3NCwxNi40MjktMTYuOTg0Qzk0Ljc4NCw0MS40ODQsOTEuNTAyLDM2LjUzNSw4Ny43LDMwLjgwNHoiPjwvcGF0aD48cGF0aCBkPSJNNS4yMTYsNjMuMjM3YzAsNy45MTcsNi41MzMsMTQuMzU3LDE0LjU2MywxNC4zNTdjMS41NzEsMCwzLjEwOC0wLjI2Nyw0LjU5LTAuNzY1Yy0wLjY5Ny0yLjM5Mi0xLjA3OC00LjkxNC0xLjA3OC03LjUyNCAgYzAtOC4xMTUsMi40NDUtMTQuMjI1LDUuODg3LTIwLjE0MmMtMC4yODEtMC40MjktMC41NjItMC44NTUtMC44NS0xLjI5MWMtMy4yNjYtNC45MjYtNi45MjctMTAuNDQ5LTguNTQ5LTE5LjI3OCAgYy0xLjYyMiw4LjgzMi01LjI4NSwxNC4zNTYtOC41NTIsMTkuMjgzQzguMDAxLDUyLjc0MSw1LjIxNiw1Ni45NDEsNS4yMTYsNjMuMjM3eiI+PC9wYXRoPjwvc3ZnPg=="
            }
            size={40}
          />
          <GasTitle color={"orange"}>GASOIL+</GasTitle>
          <Total>0.390 $/L</Total>
          <Tax value={75}>+75%</Tax>
          <TotalTTC>1.610 $/L</TotalTTC>
        </Gas>
        <Gas
          bgColorSelected={"#a9a9a9"}
          onClick={() => setGasSelected("ESSENCE")}
          isSelected={gasSelected === "ESSENCE"}
        >
          <Icon
            color={"#000000"}
            url={
              "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxtZXRhZGF0YT48c2Z3IHhtbG5zPSJodHRwOi8vbnMuYWRvYmUuY29tL1NhdmVGb3JXZWIvMS4wLyI+PHNsaWNlcz48L3NsaWNlcz48c2xpY2VTb3VyY2VCb3VuZHMgaGVpZ2h0PSI4Ni42MzkiIHdpZHRoPSI1OCIgeD0iMjEiIHk9IjcuMjUiIGJvdHRvbUxlZnRPcmlnaW49InRydWUiPjwvc2xpY2VTb3VyY2VCb3VuZHM+PG9wdGltaXphdGlvblNldHRpbmdzPjx0YXJnZXRTZXR0aW5ncyBmaWxlRm9ybWF0PSJHSUZGb3JtYXQiIHRhcmdldFNldHRpbmdzSUQ9IjAiPjxHSUZGb3JtYXQgdHJhbnNwYXJlbmN5PSJ0cnVlIiBsb3NzeT0iMCIgYXV0b1JlZHVjZT0iZmFsc2UiIHJvbGxvdmVyTWFzdGVyUGFsZXR0ZT0iZmFsc2UiIG51bUNvbG9ycz0iMjU2IiBkaXRoZXJQZXJjZW50PSIxMDAiIGRpdGhlckFsZ29yaXRobT0iZGlmZnVzaW9uIiByZWR1Y3Rpb25BbGdvcml0aG09InNlbGVjdGl2ZSIgaW5jbHVkZUNhcHRpb249ImZhbHNlIiB3ZWJTaGlmdFBlcmNlbnQ9IjAiIG5vTWF0dGVDb2xvcj0iZmFsc2UiIGludGVybGFjZWQ9ImZhbHNlIiBtYXR0ZUNvbG9yPSIjRkZGRkZGIj48Y29sb3JUYWJsZSBpc0V4YWN0PSJmYWxzZSI+PC9jb2xvclRhYmxlPjxsb2NrZWRDb2xvcnM+PC9sb2NrZWRDb2xvcnM+PGNvbG9yU2hpZnRFbnRyaWVzPjwvY29sb3JTaGlmdEVudHJpZXM+PC9HSUZGb3JtYXQ+PC90YXJnZXRTZXR0aW5ncz48L29wdGltaXphdGlvblNldHRpbmdzPjwvc2Z3PjwvbWV0YWRhdGE+PHBhdGggZD0iTTUxLjIzNCw3Ljg5N0w1MCw2LjExMWwtMS4yMzQsMS43ODdDNDcuNjMyLDkuNTM5LDIxLDQ4LjI3MiwyMSw2My43NWMwLDE1Ljk5LDEzLjAwOSwyOSwyOSwyOWMxNS45OSwwLDI5LTEzLjAxLDI5LTI5ICBDNzksNDguMjcyLDUyLjM2OCw5LjUzOSw1MS4yMzQsNy44OTd6IE01MCw4NS4yNWMtMTEuODU1LDAtMjEuNS05LjY0NS0yMS41LTIxLjVjMC0wLjgyOCwwLjY3MS0xLjUsMS41LTEuNXMxLjUsMC42NzIsMS41LDEuNSAgYzAsMTAuMjAxLDguMjk5LDE4LjUsMTguNSwxOC41YzAuODI5LDAsMS41LDAuNjcyLDEuNSwxLjVTNTAuODI5LDg1LjI1LDUwLDg1LjI1eiI+PC9wYXRoPjwvc3ZnPg=="
            }
            size={40}
          />
          <GasTitle>ESSENCE</GasTitle>
          <Total>0.390 $/L</Total>
          <Tax value={75}>+75%</Tax>
          <TotalTTC>1.589 $/L</TotalTTC>
        </Gas>
        <Gas
          isOutOfStock
          bgColorSelected={"#edd8ff"}
          onClick={() => setGasSelected("ESSENCE+")}
          isSelected={gasSelected === "ESSENCE+"}
        >
          <Icon
            color={"#4a0b4a"}
            url={
              "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+NDM8L3RpdGxlPjxnIGRhdGEtbmFtZT0iR3JvdXAiPjxwYXRoIGRhdGEtbmFtZT0iQ29tcG91bmQgUGF0aCIgZD0iTTc0LjMsMjUuN2EzNC40LDM0LjQsMCwxLDAsMCw0OC42aDBBMzQuNCwzNC40LDAsMCwwLDc0LjMsMjUuN1pNMjkuOSwyOS45YTI4LjQsMjguNCwwLDAsMSwzNy45LTJMMjcuOSw2Ny44QTI4LjQsMjguNCwwLDAsMSwyOS45LDI5LjlaTTcwLjEsNzAuMWEyOC40LDI4LjQsMCwwLDEtMzcuOSwyTDcyLjEsMzIuMkEyOC40LDI4LjQsMCwwLDEsNzAuMSw3MC4xWiI+PC9wYXRoPjwvZz48L3N2Zz4="
            }
            size={40}
          />
          <GasTitle isOutOfStock color={"purple"}>
            ESSENCE+
          </GasTitle>
          <Total>0.390 $/L</Total>
          <Tax value={75}>+75%</Tax>
          <TotalTTC> 1.675 $/L</TotalTTC>
        </Gas>
        <Gas
          bgColorSelected={"#cdecf9"}
          onClick={() => setGasSelected("ELECTRIQUE")}
          isSelected={gasSelected === "ELECTRIQUE"}
        >
          <Icon
            color={"#449cf7"}
            size={40}
            url={
              "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NTAgLTQ0MCkiPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00NTUsNDU1YzAtNS4zMSw0LjE2Ni05LjY1Niw5LjQtOS45NzFsMS41MTctMS45ODJDNDY1LjYxMyw0NDMuMDIzLDQ2NS4zMSw0NDMsNDY1LDQ0M2MtNi42MjcsMC0xMiw1LjM3My0xMiwxMiAgICBjMCw0LjM5MSwyLjM2NSw4LjIxOSw1Ljg4NCwxMC4zMWwwLjUyMS0yLjAyN0M0NTYuNzQ5LDQ2MS40ODQsNDU1LDQ1OC40NDEsNDU1LDQ1NXoiPjwvcGF0aD48cGF0aCBkPSJNNDcxLjA3NCw0NDQuNjY0bC0wLjU0OSwyLjAwOEM0NzMuMjIsNDQ4LjQ2Nyw0NzUsNDUxLjUyNyw0NzUsNDU1YzAsNS4zMS00LjE2Niw5LjY1Ni05LjQsOS45NjlsLTEuNTE4LDEuOTg0ICAgIEM0NjQuMzg3LDQ2Ni45NzcsNDY0LjY5LDQ2Nyw0NjUsNDY3YzYuNjI3LDAsMTItNS4zNzMsMTItMTJDNDc3LDQ1MC41OTIsNDc0LjYxNiw0NDYuNzUsNDcxLjA3NCw0NDQuNjY0eiI+PC9wYXRoPjxwb2x5Z29uIHBvaW50cz0iNDczLDQ1MiA0NjcsNDUyIDQ2Ny41ODgsNDQ5Ljg0MiA0NjguNzEyLDQ0NS43MjMgNDY5LjI0LDQ0My43ODUgNDcwLDQ0MSA0NjguMTQyLDQ0My40MyA0NjYuODEsNDQ1LjE3MiAgICAgNDYzLjQ4Miw0NDkuNTIzIDQ1Nyw0NTggNDYzLDQ1OCA0NjIuNDE1LDQ2MC4xNDUgNDYxLjI4OCw0NjQuMjc3IDQ2MC43Niw0NjYuMjE1IDQ2MCw0NjkgNDYxLjg1OCw0NjYuNTcgNDYzLjE5LDQ2NC44MjggICAgIDQ2Ni41Niw0NjAuNDIgICAiPjwvcG9seWdvbj48L2c+PC9nPjwvc3ZnPg=="
            }
          />
          <GasTitle color={"#449cf7"}>ELECTRIQUE</GasTitle>
          <Total>0.390 $/W</Total>
          <Tax value={0}>+0%</Tax>
          <TotalTTC> 0.25 $/W</TotalTTC>
        </Gas>
        <Gas
          bgColorSelected={"#d2fbc8"}
          onClick={() => setGasSelected("BIO")}
          isSelected={gasSelected === "BIO"}
        >
          <Icon
            size={40}
            color={"#4fcc30"}
            url={
              "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+RWNvbG9neTwvdGl0bGU+PHBhdGggZD0iTTYzLjkxODgyLDY2LjM1OTE5Yy0xNi4yMjU3LTguOTE1NC0xOC42OTIyNi0zLjA3NDIyLTI2LjAxMTktNS41NTUyMy04LjIxOTI0LTIuNzg1NzctOS4zMTY0LDguMTgzLDYuMjk1MTEsOS43MDgwNiwxNi4xNDQsMS41NzcwOS03LjYyMzg0LDkuMjcyODktMTcuNTI2ODYsMi4xMzA3NEM3LjExNTYsNTguNTM2MTMsMS45MTc2LDY1LjU2NzM4LDguMzk4MzgsNjkuOTczODhjNi4zNTc2LDQuMzIyODEsOS4zNTQwNiw5Ljk0OTUyLDEzLjk5MzE2LDEyLjU4MTY2LDQuMjgzNjMsMi40MzA0OCw3LjExMSwzLjIyNzcyLDEyLjQ2OTQ4LDQuNjMxLDEyLjc1NzMzLDMuMzQwODgsMjcuMjI5MTMsMy43MjIsMzUuNjk2MjktLjI2ODg2LjU4NjU2LS4yNzYzNSwxMS4wMDM1Ny01LjMyMDE0LDIwLjY3ODM5LTkuOTc2NDNhMS43LDEuNywwLDAsMCwuOTYyNzQtMS41MzMzbC0uMDAwMDYtMjEuOTQ5NzFhLjUzNTExLjUzNTExLDAsMCwwLS42NzYxNi0uNTIwNDNDODEuMzAxNjgsNTUuOTIzMzUsNjguNjcwMyw2OC45Nyw2My45MTg4Miw2Ni4zNTkxOVoiPjwvcGF0aD48cGF0aCBkPSJNMjIuNzY3LDMzLjg0OGMyLjk2Miw2LjIzOTc1LDguMDU4NzcsOS40ODk1NywxMS4xNzc3Myw3LjE5ODg2YTkuMjgzMDksOS4yODMwOSwwLDAsMCwzLjAyMDYzLTUuOTE0MTNsLjAwMTgzLS4wMDA3M2E2NS40MDEzNyw2NS40MDEzNywwLDAsMSw3LjQ0NjM1LDcuNjk3NTdoMy4wNzI4OEMzMy45NDMzLDI1LjM1NDI1LDE4LjU1MjMxLDIwLDE4LjU1MjMxLDIwYzYuOTMsMS4zMjg0MywxNy42MTQxMyw2LjU4NTMzLDI1LjAxNjc4LDEyLjgxOTIxbC4wMDEuMDAwMzFhNi43MDQsNi43MDQsMCwwLDAsMy4wNTYtMS4wODY0OWMzLjExODktMi4yOTA3MSw0LjgyMjg4LTguMTU0NzgtMi42ODE1Mi0xMy40Mzg5QzI5LjU5NjY4LDguMTkxMjIsNSwxOC42Nyw1LDE4LjY3UzE0Ljg1NzA2LDE3LjE4NDg4LDIyLjc2NywzMy44NDhaIj48L3BhdGg+PHBhdGggZD0iTTg1LjYzMTU5LDE2LjYzMTM1Yy0uMDAyOTMuMDMyNDEtMTIuOTk1Niw4LjYwMDc3LTIyLjMzNDc4LDE5LjU0MDQ2LS4yODY1Ni4zNDA1Mi03Ljk4Niw5LjM5MzgtMTAuNDQxNzEsMTcuODI2ODVsMy44NTk0NCwyLjE0Mjg4YTM4Ljk0NzE0LDM4Ljk0NzE0LDAsMCwxLDQuMjU0ODgtMTAuNTQ0OEE1Ljg2Nyw1Ljg2NywwLDAsMCw2Mi4wMzE4LDQ3Ljc2NmMyLjgzNjc5LDMuNzI5MTMsMTAuNDg4ODMsMi4yOTQzNywxNi43NTcxNC0yLjkwNTM5Qzk0LjQ2MzA3LDMxLjg1ODI4LDk1LDEwLjY2NTEsOTUsMTAuNjY1MVM3NC4wOTk3OSw2Ljk2NDksNTguNDI3ODYsMjAuNDAwN0M1Mi4yNTE3NywyNS42OTU1LDQ4LjY4Njg3LDMzLjY4Njg3LDUyLDM3YTUuNDU4NjgsNS40NTg2OCwwLDAsMCw1LjEzNywxLjQwOTUxUzc0LDIwLDg1LjYzMTU5LDE2LjYzMTM1WiI+PC9wYXRoPjwvc3ZnPg=="
            }
          />
          <GasTitle color={"#4fcc30"}>BIO</GasTitle>
          <Total>0.390 $/L</Total>
          <Tax value={0}>+0%</Tax>
          <TotalTTC> 0.70 $/L</TotalTTC>
        </Gas>
      </SelectGas>
      <Action>
        {!gasSelected && <Warning> Choissisez votre carburant ! </Warning>}
        <Line>
          <WrapperPayment>
            <Payment
              total={countBuy * price}
              tax={(countBuy * price * 75) / 100}
              totalTTC={(countBuy * price * 75) / 100 + countBuy * price}
              moneyAvailable={moneyAvailable - countBuy * price}
              countBuy={countBuy}
              typeBuy={"carburant"}
            />
          </WrapperPayment>
          <FuelLevel>
            <WrapperGauge>
              <Gauge value={defaultCount + countBuy} />
            </WrapperGauge>
            {defaultCount + countBuy}L / 500L
          </FuelLevel>
          {!gasSelected ? (
            <Informations>
              <InfoTitle>Informations :</InfoTitle>
              <List>
                <li>
                  - Choisir un mauvais carburant peut endommager votre
                  véhicule.(Dégats, diminution de la vitesse maximum et perte
                  d'accélération)
                </li>
                <li>
                  - A l'inverse, choisir un carburant premium vous permez de
                  booster la vitesse de pointe et d'accélération de votre
                  véhicule.
                </li>
              </List>
            </Informations>
          ) : (
            <Buy>
              <BuyButton
                label={"REMPLIR"}
                variant={BTN_VARIANT.primary}
                iconLeftSize={80}
                color={"#f3a20e"}
                onMouseDown={buy}
                onMouseUp={stopBuy}
                onMouseOut={stopBuy}
                iconLeftUrl={
                  isOnBuy
                    ? "data:image/svg+xml,%3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='674.589px' height='363.824px' viewBox='-30.999 63.683 674.589 363.824' enable-background='new -30.999 63.683 674.589 363.824' xml:space='preserve'%3E%3Cpath d='M9.039,178.383l138.336-33.43c4.29-1.043,8.752-1.188,13.1-0.429l53.239,9.194l11.517-49.926l-72.99-11.684 c-1.839-0.296-3.723-0.223-5.53,0.216L-3.016,128.525c-3.625,0.875-6.755,3.156-8.7,6.34s-2.547,7.008-1.669,10.637l5.469,22.524 C-6.091,175.561,1.497,180.199,9.039,178.383z'/%3E%3Cpath d='M235.423,157.459c2.079,0.36,3.972,1.427,5.352,3.021l220.084,254.158c7.424,8.579,18.351,13.305,29.689,12.838 c11.334-0.465,21.837-6.073,28.532-15.229l61.273-83.834c1.457-1.991,3.661-3.313,6.106-3.656c2.445-0.343,4.925,0.313,6.877,1.828 c2.556,1.983,5.801,2.869,9.01,2.46c3.214-0.408,6.129-2.077,8.109-4.637l30.584-39.583c4.123-5.325,3.145-12.986-2.181-17.103 L458.649,128.364c-2.728-2.109-4.035-5.575-3.379-8.962l2.863-14.888c1.455-7.618-3.529-14.977-11.144-16.451L321.749,63.931 c-3.667-0.697-7.46,0.091-10.545,2.192c-3.084,2.101-5.21,5.339-5.907,9.007l-6.172,32.23c-0.933,4.913-5.639,8.166-10.562,7.302 l-45.278-7.824l-11.552,50.028L235.423,157.459z M503.321,387.475c-3.817,5.207-9.84,8.342-16.295,8.479s-12.606-2.737-16.642-7.776 l-89.18-111.686c-6.775-8.462-10.163-19.142-9.497-29.961l30.053,4.393c11.734,1.64,22.721,6.728,31.564,14.619l96.761,85.326 L503.321,387.475z M387.161,215.531l10.644-8.986c16.682-13.924,41.011-13.649,57.371,0.652l103.175,90.953 c3.554,3.125,4.13,8.443,1.338,12.26l-18.723,25.619l-95.483-84.143c-11.521-10.286-25.839-16.91-41.136-19.036l-27.805-4.1 c2.663-5.064,6.285-9.563,10.665-13.246L387.161,215.531z M311.973,184.949l38.638,41.023c3.443,3.676,3.26,9.45-0.412,12.9 c-0.515,0.491-1.082,0.914-1.7,1.266c-3.67,2.119-8.316,1.437-11.22-1.648l-38.639-41.018c-2.241-2.381-3.041-5.775-2.102-8.905 c0.941-3.127,3.478-5.521,6.661-6.272c3.18-0.749,6.519,0.254,8.761,2.631L311.973,184.949z M262.435,150.337 c3.611-3.524,9.395-3.458,12.921,0.152l12.913,13.22c3.526,3.615,3.453,9.402-0.159,12.925c-0.545,0.54-1.158,1.002-1.822,1.381 c-3.614,2.082-8.183,1.455-11.097-1.53l-12.883-13.206c-1.705-1.735-2.645-4.074-2.62-6.505c0.031-2.43,1.024-4.749,2.762-6.447 L262.435,150.337z'/%3E%3Cpath d='M14.731,337.001c12.243,0.422,24.115-4.257,32.781-12.923c8.666-8.662,13.344-20.534,12.919-32.781 c0-21.151-29.587-68.233-45.7-86.838c-16.105,18.593-45.704,65.675-45.704,86.838c-0.426,12.247,4.257,24.119,12.919,32.781 C-9.388,332.744,2.484,337.423,14.731,337.001z'/%3E%3C/svg%3E%0A"
                    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='512pt' viewBox='0 -1 512.12542 512' width='512pt'%3E%3Cpath d='m10.320312 49.855469 136.550782 40.226562c4.238281 1.242188 8.175781 3.347657 11.5625 6.179688l41.519531 34.589843 34.945313-37.488281-57.382813-46.625c-1.445313-1.175781-3.113281-2.054687-4.898437-2.578125l-147.804688-43.523437c-3.578125-1.054688-7.429688-.6445315-10.707031 1.140625-3.277344 1.785156-5.710938 4.796875-6.765625 8.378906l-6.527344 22.246094c-2.1875 7.441406 2.066406 15.253906 9.507812 17.453125zm0 0'/%3E%3Cpath d='m216.886719 144.949219c1.621093 1.351562 2.726562 3.222656 3.125 5.292969l63.535156 330.230468c2.140625 11.144532 9.242187 20.703125 19.296875 25.96875 10.050781 5.265625 21.953125 5.660156 32.332031 1.078125l95.003907-41.976562c2.257812-.996094 4.828124-1.039063 7.117187-.113281 2.289063.925781 4.109375 2.734374 5.042969 5.023437 1.222656 2.996094 3.589844 5.386719 6.574218 6.636719 2.988282 1.253906 6.347657 1.265625 9.34375.039062l46.289063-18.992187c6.234375-2.550781 9.21875-9.675781 6.664063-15.90625l-86.40625-210.84375c-1.308594-3.191407-.707032-6.847657 1.554687-9.453125l9.925781-11.464844c5.070313-5.871094 4.433594-14.738281-1.425781-19.824219l-96.417969-83.539062c-2.828125-2.4375-6.507812-3.652344-10.230468-3.375-3.722657.277343-7.183594 2.019531-9.621094 4.847656l-21.464844 24.832031c-3.265625 3.789063-8.96875 4.253906-12.800781 1.042969l-35.308594-29.421875-35.027344 37.558594zm117.027343 333.230469c-5.910156 2.601562-12.695312 2.304687-18.355468-.804688s-9.550782-8.675781-10.527344-15.058594l-21.394531-141.347656c-1.636719-10.71875.769531-21.664062 6.757812-30.703125l23.835938 18.835937c9.34375 7.289063 16.316406 17.191407 20.03125 28.449219l41.144531 122.304688zm-14.628906-207.039063 13.714844-2.460937c21.414062-3.71875 42.351562 8.6875 49.371094 29.257812l43.886718 130.386719c1.515626 4.484375-.644531 9.378906-4.972656 11.289062l-29.03125 12.828125-40.628906-120.640625c-4.835938-14.671875-13.925781-27.570312-26.113281-37.0625l-22.035157-17.457031c4.839844-3.054688 10.226563-5.140625 15.863282-6.140625zm-49.835937-64.09375 12.953125 54.859375c1.144531 4.90625-1.902344 9.816406-6.808594 10.96875-.691406.167969-1.394531.25-2.105469.246094-4.238281 0-7.921875-2.914063-8.894531-7.039063l-12.957031-54.855469c-.75-3.183593.253906-6.523437 2.632812-8.765624 2.378907-2.238282 5.773438-3.042969 8.90625-2.101563 3.128907.941406 5.519531 3.480469 6.273438 6.660156zm-25.601563-54.757813c4.890625-1.246093 9.867188 1.703126 11.117188 6.59375l4.574218 17.910157c1.246094 4.894531-1.710937 9.871093-6.601562 11.117187-.742188.195313-1.503906.289063-2.269531.285156-4.171875-.003906-7.816407-2.832031-8.847657-6.875l-4.554687-17.882812c-.609375-2.355469-.253906-4.851562.984375-6.945312 1.242188-2.089844 3.261719-3.601563 5.617188-4.203126zm0 0'/%3E%3C/svg%3E"
                }
              />
            </Buy>
          )}
        </Line>
      </Action>
    </Interface>
  );
};
