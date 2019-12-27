import React from "react";

import {
  HealthBar,
  Header,
  EquippedTag,
  Wrapper,
  Quantity,
  StyledIcon,
  Weight
} from "./styles";
import Icon from "../../../common/components/Icon";

export default ({ iconUrl, isSelected, health, isEquipped, quantity }) => (
  <Wrapper isSelected={isSelected}>
    {isEquipped && <EquippedTag />}
    <Header>
      <Weight>
        <Icon
          color={"#959da3"}
          size={14}
          url={
            "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik04Ny44LDgzLjNMNzIuMywzOC40Yy0wLjMtMC44LTEtMS4zLTEuOS0xLjNoLTcuN2gtNC4zYzIuOS0yLjQsNC44LTYuMiw0LjctMTAuM2MtMC4yLTYuOC01LjctMTIuNC0xMi41LTEyLjcgIGMtNy40LTAuMy0xMy41LDUuNi0xMy41LDEzYzAsNCwxLjgsNy42LDQuNywxMGgtNy41aC00LjZjLTAuOCwwLTEuNiwwLjUtMS45LDEuM0wxMi4yLDgzLjNjLTAuNSwxLjMsMC41LDIuNywxLjksMi43aDcxLjggIEM4Ny4zLDg1LjksODguMyw4NC42LDg3LjgsODMuM3ogTTUwLDIxLjZjMywwLDUuNSwyLjQsNS41LDUuNVM1MywzMi41LDUwLDMyLjVjLTMsMC01LjUtMi40LTUuNS01LjVTNDcsMjEuNiw1MCwyMS42eiI+PC9wYXRoPjwvc3ZnPg=="
          }
        />
        0.5
      </Weight>
      <Quantity>{quantity}</Quantity>
    </Header>
    <StyledIcon url={iconUrl} size={20} />
    {health >= 0 && <HealthBar value={health} />}
  </Wrapper>
);
