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

const renderIcon = (icon, url, size, hasMarginRight, props) => {
  const {
    color = BTN_COLOR.business,
    variant = BTN_VARIANT.primary,
    disabled,
    hoverColor,
    isHover
  } = props;
  const SvgIcon = icon;
  return (
    <IconWrapper hasMarginRight={hasMarginRight}>
      {url ? (
        <BurdiIcon
          size={size}
          url={url}
          color={
            isHover
              ? getTextHoverColor({ color, hoverColor, variant, disabled })
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
    hoverColor,
    label,
    iconLeft,
    iconLeftUrl,
    iconLeftSize,
    disabled,
    variant = BTN_VARIANT.primary,
    className,
    isFullWidth = false,
    onMouseEnter = Function.prototype,
    onMouseLeave = Function.prototype
  } = props;

  const hasMarginRightIconLeft = !!label;
  return (
    <StyledButton
      isFullWidth={isFullWidth}
      className={className}
      disabled={disabled}
      color={color}
      hoverColor={hoverColor}
      variant={variant}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {(iconLeft || iconLeftUrl) &&
        renderIcon(
          iconLeft,
          iconLeftUrl,
          iconLeftSize,
          hasMarginRightIconLeft,
          props
        )}
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
      !isEmpty(iconLeftUrl) && setHover(false),
    onClick: ({ onClick }) => () => onClick()
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (prevProps.disabled !== this.props.disabled) {
        this.props.setHover(false);
      }
    }
  })
)(BurdiButton);
