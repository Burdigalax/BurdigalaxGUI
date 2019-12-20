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
      return transparent;
    default:
      return color;
  }
};

export const getTextHoverColor = ({ color, variant, disabled }) => {
  if (disabled) return getTextColor({ color, variant });

  switch (variant) {
    case BTN_VARIANT.primary:
      return getTextColor({ color, variant });
    case BTN_VARIANT.secondary:
      return color !== BTN_COLOR.white ? white : black;
    case BTN_VARIANT.none:
      return color;
    default:
      return color;
  }
};

const getBgHoverColor = ({ color, variant, disabled }) => {
  if (disabled) return getBgColor({ color, variant });
  if (variant === BTN_VARIANT.none) return transparent;
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

export const StyledButton = styled.button`
  color: ${props => getTextColor(props)};
  flex: ${props => (props.isFullWidth ? 1 : 0)};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  background-color: ${props => getBgColor(props)};
  border: ${props =>
    props.variant !== BTN_VARIANT.none ? `1px solid ${props.color}` : "none"};
  cursor: pointer;
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
  margin-right: 5px;
`;
