import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { Title, Header } from "./styles";
import selectShop from "../../redux/reducers/entities/shop/selectors/select-shop";
import Icon from "../../../common/components/Icon";
import selectStyleFromConfig from "../../redux/reducers/config/selectors/select-style-from-config";

const HeaderComponent = ({
  name,
  iconUrl = "",
  titleColor,
  iconColor,
  bgColor,
  iconSize = 40
}) => (
  <Header bgColor={bgColor}>
    <Icon url={iconUrl} color={iconColor} size={iconSize} />
    <Title color={titleColor}>{name}</Title>
  </Header>
);

const mapStateToProps = state => {
  const shop = selectShop(state);
  const style = selectStyleFromConfig(state);
  return {
    name: shop.name,
    iconUrl: shop.iconUrl,
    iconColor: style.header.iconColor,
    iconSize: style.header.iconSize,
    bgColor: style.header.backgroundColor,
    titleColor: style.header.titleColor
  };
};

export default compose(connect(mapStateToProps))(HeaderComponent);
