import React from "react";
import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import { CloseButton, Title, Header } from "./styles";
import { BTN_VARIANT } from "../../../common/components/BurdiButton/constants";
import selectShop from "../../redux/reducers/entities/shop/selectors/select-shop";
import Icon from "../../../common/components/Icon";
import selectStyleFromConfig from "../../redux/reducers/config/selectors/select-style-from-config";
import { onClose } from "../../events";

const HeaderComponent = ({
  name,
  iconUrl = "",
  color,
  bgColor,
  onClose = Function.prototype
}) => (
  <Header bgColor={bgColor}>
    <Icon url={iconUrl} color={color} size={40} />
    <Title color={color}>{name}</Title>
    <CloseButton
      label="X"
      variant={BTN_VARIANT.secondary}
      color={color}
      onClick={onClose}
    />
  </Header>
);

const mapStateToProps = state => {
  const shop = selectShop(state);
  const style = selectStyleFromConfig(state);
  return {
    name: shop.name,
    iconUrl: shop.iconUrl,
    bgColor: style.headerBackgroundColor
  };
};

export default compose(
  connect(mapStateToProps),
  withHandlers({
    onClose: ({ shoppingCart }) => () =>
      window.dispatchEvent(new CustomEvent(onClose))
  })
)(HeaderComponent);
