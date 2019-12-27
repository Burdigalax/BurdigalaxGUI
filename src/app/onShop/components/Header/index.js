import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import selectShop from "../../redux/reducers/entities/shop/selectors/select-shop";
import selectStyleFromConfig from "../../../redux/reducers/config/selectors/select-style-from-config";
import HeaderComponent from "../../../common/components/Header";

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
