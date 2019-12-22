import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import React from "react";

import HeaderComponent from "./component";
import selectQuantityArticlesFromShoppingCart from "../../../redux/reducers/navigation/shopping-cart/selectors/select-quantity-articles-from-shopping-cart";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";
import { LUA_FUNCTIONS } from "../../../events";

const mapStateToProps = state => {
  const quantity = selectQuantityArticlesFromShoppingCart(state);
  const wording = selectWordingFromConfig(state);

  return {
    quantity,
    wording
  };
};

const HeaderContainer = compose(
  connect(mapStateToProps),
  withHandlers({
    onClose: () => () => LUA_FUNCTIONS.onClose()
  })
)(HeaderComponent);

export default HeaderContainer;
