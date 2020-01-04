import React from "react";
import styled from "styled-components";

import { BTN_COLOR, BTN_VARIANT } from "./constants";
import { transparent, white, black } from "../../colors";

export const getTextColor = ({ color, variant }) => {
  switch (variant) {
    case BTN_VARIANT.primary:
      return white;
    default:
      return color;
  }
};

const getBgColor = ({ color, variant }) => {
  switch (variant) {
    case BTN_VARIANT.primary:
      return color;
    case BTN_VARIANT.secondary:
    case BTN_VARIANT.none:
    case BTN_VARIANT.special:
      return transparent;
    default:
      return color;
  }
};

export const getTextHoverColor = ({ color, hoverColor, variant, disabled }) => {
  if (disabled) return getTextColor({ color, variant });

  switch (variant) {
    case BTN_VARIANT.primary:
      return getTextColor({ color, variant });
    case BTN_VARIANT.secondary:
      return color !== BTN_COLOR.white ? white : black;
    case BTN_VARIANT.none:
      return hoverColor || color;
    case BTN_VARIANT.special:
      return hoverColor;
    default:
      return color;
  }
};

const getBgHoverColor = ({ color, variant, disabled }) => {
  if (disabled) return getBgColor({ color, variant });
  if (variant === BTN_VARIANT.none || variant === BTN_VARIANT.special)
    return transparent;
  if (variant === BTN_VARIANT.secondary) return color;

  return color;
  // switch (color) {
  //   case BTN_COLOR.business:
  //     return lightGreen;
  //   case BTN_COLOR.danger:
  //     return lightRed;
  //   case BTN_COLOR.info:
  //     return ligthBlue;
  //   default:
  //     return white;
  // }
};

const getHoverFilter = ({ variant, disabled }) => {
  if (
    disabled ||
    (variant !== BTN_VARIANT.none && variant !== BTN_VARIANT.primary)
  )
    return "none";

  return "brightness(1.2)";
};

const getBorder = ({ variant, color }) => {
  if (variant === BTN_VARIANT.none || variant === BTN_VARIANT.special)
    return "none";
  return `1px solid ${color}`;
};

export const StyledButton = styled.button`
  color: ${props => getTextColor(props)};
  flex: ${props => (props.isFullWidth ? 1 : 0)};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  background-color: ${props => getBgColor(props)};
  border: ${props => getBorder(props)};
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  border-radius: 7px;
  font-size: 16px;
  align-items: center;
  display: flex;
  margin: 5px;
  justify-content: center;
  outline-style: none !important;
  padding: 5px;
  > div > svg {
    fill: ${props => getTextColor(props)};
  }
  &:hover {
    filter: ${props => getHoverFilter(props)};
    color: ${props => getTextHoverColor(props)};
    background-color: ${props => getBgHoverColor(props)};
    > div > svg {
      fill: ${props => getTextHoverColor(props)};
    }
  }
`;

export const IconWrapper = styled.div`
  margin-right: ${({ hasMarginRight }) => (hasMarginRight ? "5px" : "")};
  display: flex;
`;
