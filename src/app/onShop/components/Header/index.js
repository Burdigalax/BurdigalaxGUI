import React from "react";
import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import { Title, Header } from "./styles";
import selectShop from "../../redux/reducers/entities/shop/selectors/select-shop";
import Icon from "../../../common/components/Icon";
import selectStyleFromConfig from "../../redux/reducers/config/selectors/select-style-from-config";
import { LUA_FUNCTIONS } from "../../events";

const HeaderComponent = ({ name, iconUrl = "", color }) => (
  <Header>
    <Icon url={iconUrl} color={color} size={40} />
    <Title color={color}>{name}</Title>
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

export default compose(connect(mapStateToProps))(HeaderComponent);
