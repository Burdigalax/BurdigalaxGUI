import styled from "styled-components";
import { withStyles, InputBase, Switch, Select } from "@material-ui/core";

import BurdiButton from "../../../common/components/BurdiButton";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const UseButton = styled(BurdiButton)`
  border-width: 2px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
`;

export const StyledInputBase = withStyles({
  root: {
    color: "#A6A6A6"
  }
})(InputBase);

export const StyledInput = styled.input`
  border: 2px solid #57636d;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 50px;
  color: #ffffff;
  background-color: #2d3c48;
  outline: none;
  font-weight: 600;
  font-family: Montserrat;
  font-size: 16px;
  margin: 5px;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Bloc = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px;
  align-items: center;
  height: 44px;
`;

export const BurdiButtonAction = styled(BurdiButton)`
  margin: 0;
`;

export const StyledSelect = withStyles({
  root: {
    color: "#ffffff",
    border: "2px solid #57636d",
    borderRadius: "5px",
    padding: "5px",
    backgroundColor: "#2d3c48",
    minWidth: "120px",
    fontFamily: "Montserrat",
    maxWidth: "135px",
    fontSize: "13px",
    "&:focus": {
      backgroundColor: "#2d3c48",
      borderRadius: "5px"
    }
  },
  icon: {
    color: "#ffffff"
  }
})(Select);

export const MaxButton = styled(BurdiButton)`
  font-size: 8px;
  position: relative;
  top: 10px;
  margin-left: -25px;
  padding: 3px;
  margin-right: 3px;
  font-weight: 600;
`;

export const WrapperSwitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EquippedSwitch = withStyles({
  root: {
    "& .Mui-checked": {
      color: "#faa82a"
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#faa82a !important"
    }
  }
})(Switch);
