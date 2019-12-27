import styled from "styled-components";
import { withStyles, InputBase, Select } from "@material-ui/core";

import BurdiButton from "../../../common/components/BurdiButton";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const UseButton = styled(BurdiButton)`
  border-width: 2px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
`;

export const EquippedButton = styled(BurdiButton)`
  border-width: 2px;
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
  width: 30px;
  color: #ffffff;
  background-color: #2d3c48;
  outline: none;
  font-weight: 600;
  font-family: Montserrat;
  font-size: 16px;
  margin: 10px;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Bloc = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
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
