import React from "react";
import { withState, withHandlers, compose, lifecycle } from "recompose";
import { isEmpty } from "ramda";

import {
  IconWrapper,
  StyledButton,
  getTextColor,
  getTextHoverColor
} from "./styles";
import { BTN_COLOR, BTN_VARIANT } from "./constants";

import BurdiIcon from "../Icon";

const renderIcon = (icon, url, size, props) => {
  const {
    color = BTN_COLOR.business,
    variant = BTN_VARIANT.primary,
    disabled,
    isHover
  } = props;
  const SvgIcon = icon;
  return (
    <IconWrapper>
      {url ? (
        <BurdiIcon
          size={size}
          url={url}
          color={
            isHover
              ? getTextHoverColor({ color, variant, disabled })
              : getTextColor({ color, variant })
          }
        />
      ) : (
        <SvgIcon size={size} />
      )}
    </IconWrapper>
  );
};

const BurdiButton = props => {
  const {
    color = BTN_COLOR.business,
    label,
    iconLeft,
    iconLeftUrl,
    iconLeftSize,
    disabled,
    onClick,
    variant = BTN_VARIANT.primary,
    className,
    isFullWidth = false,
    onMouseEnter = Function.prototype,
    onMouseLeave = Function.prototype
  } = props;

  return (
    <StyledButton
      isFullWidth={isFullWidth}
      className={className}
      disabled={disabled}
      onClick={onClick}
      color={color}
      variant={variant}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {(iconLeft || iconLeftUrl) &&
        renderIcon(iconLeft, iconLeftUrl, iconLeftSize, props)}
      {label}
    </StyledButton>
  );
};

export default compose(
  withState("isHover", "setHover", false),
  withHandlers({
    onMouseEnter: ({ setHover, iconLeftUrl = "" }) => () =>
      !isEmpty(iconLeftUrl) && setHover(true),
    onMouseLeave: ({ setHover, iconLeftUrl = "" }) => () =>
      !isEmpty(iconLeftUrl) && setHover(false)
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (prevProps.disabled !== this.props.disabled) {
        this.props.setHover(false);
      }
    }
  })
)(BurdiButton);
