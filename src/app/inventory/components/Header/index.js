import React from "react";
import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import {
  Description,
  Storage,
  Title,
  CloseButton,
  Wrapper,
  getColor
} from "./styles";
import { BTN_VARIANT } from "../../../common/components/BurdiButton/constants";
import Icon from "../../../common/components/Icon";
import selectInventory from "../../redux/reducers/entities/inventory/selectors/select-inventory";
import getBusyStorage from "../../redux/reducers/entities/inventory/getters/get-busy-storage";
import { LUA_FUNCTIONS } from "../../events";

const HeaderComponent = ({
  name,
  description,
  storageSize = 0,
  busyStorage = 0,
  onClose
}) => (
  <Wrapper>
    <Storage busyStorage={busyStorage} storageSize={storageSize}>
      <Icon
        color={getColor(busyStorage, storageSize)}
        size={15}
        url={
          "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik04Ny44LDgzLjNMNzIuMywzOC40Yy0wLjMtMC44LTEtMS4zLTEuOS0xLjNoLTcuN2gtNC4zYzIuOS0yLjQsNC44LTYuMiw0LjctMTAuM2MtMC4yLTYuOC01LjctMTIuNC0xMi41LTEyLjcgIGMtNy40LTAuMy0xMy41LDUuNi0xMy41LDEzYzAsNCwxLjgsNy42LDQuNywxMGgtNy41aC00LjZjLTAuOCwwLTEuNiwwLjUtMS45LDEuM0wxMi4yLDgzLjNjLTAuNSwxLjMsMC41LDIuNywxLjksMi43aDcxLjggIEM4Ny4zLDg1LjksODguMyw4NC42LDg3LjgsODMuM3ogTTUwLDIxLjZjMywwLDUuNSwyLjQsNS41LDUuNVM1MywzMi41LDUwLDMyLjVjLTMsMC01LjUtMi40LTUuNS01LjVTNDcsMjEuNiw1MCwyMS42eiI+PC9wYXRoPjwvc3ZnPg=="
        }
      />
      {busyStorage}/{storageSize}
    </Storage>
    <CloseButton
      label={"x"}
      variant={BTN_VARIANT.none}
      color={"#9da6ae"}
      onClick={onClose}
    />
    <Title>{name}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

const mapStateToProps = state => {
  const { name, description, storageSize } = selectInventory(state);
  const busyStorage = getBusyStorage(state);
  return {
    name,
    description,
    storageSize,
    busyStorage
  };
};

export default compose(
  connect(mapStateToProps),
  withHandlers({
    onClose: () => () => LUA_FUNCTIONS.onClose()
  })
)(HeaderComponent);
