import { styled } from "@material-ui/core";
import ButtonMaterial from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const Button = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none"
  }
})(ButtonMaterial);
