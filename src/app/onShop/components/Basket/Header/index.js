import { connect } from "react-redux";
import React from "react";

import HeaderComponent from "./component";
import selectQuantityArticlesFromShoppingCart from "../../../redux/reducers/navigation/shopping-cart/selectors/select-quantity-articles-from-shopping-cart";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";

const mapStateToProps = state => {
  const quantity = selectQuantityArticlesFromShoppingCart(state);
  const wording = selectWordingFromConfig(state);

  return {
    quantity,
    wording
  };
};

const HeaderContainer = connect(mapStateToProps)(HeaderComponent);

export default HeaderContainer;
