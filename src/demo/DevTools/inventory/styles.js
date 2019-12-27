import styled from "styled-components";
import React from "react";
import ButtonMaterial from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const Wrapper = styled.div`
  font-family: Montserrat;
  margin: 20px;
  font-size: 15px;
`;

export const Button = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none"
  }
})(ButtonMaterial);
