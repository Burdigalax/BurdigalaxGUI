import React from "react";
import { connect } from "react-redux";
import { compose, mapProps, withHandlers } from "recompose";
import { omit } from "ramda";

import FooterComponent from "./component";
import selectHasCardBreakdownFromShop from "../../../redux/reducers/entities/shop/selectors/select-has-payment-terminal-broken-from-shop";
import selectShoppingCart from "../../../redux/reducers/navigation/shopping-cart/selectors/select-shopping-cart";
import selectPlayerMoney from "../../../redux/reducers/entities/player/selectors/select-player-money";
import selectQuantityArticlesFromShoppingCart from "../../../redux/reducers/navigation/shopping-cart/selectors/select-quantity-articles-from-shopping-cart";
import selectConfig from "../../../../redux/reducers/config/selectors/select-config";
import selectWordingFromConfig from "../../../../redux/reducers/config/selectors/select-wording-from-config";
import selectFreeStorageFromPlayer from "../../../redux/reducers/entities/player/selectors/select-free-storage-from-player";
import selectBusyStorageFromShoppingCart from "../../../redux/reducers/navigation/shopping-cart/selectors/select-busy-storage-from-shopping-cart";
import selectStyleFromConfig from "../../../../redux/reducers/config/selectors/select-style-from-config";
import { LUA_FUNCTIONS } from "../../../events";

const mapStateToProps = state => {
  const config = selectConfig(state);
  const hasCardBreakdown = selectHasCardBreakdownFromShop(state);
  const playerMoney = selectPlayerMoney(state) || {};
  const shoppingCart = selectShoppingCart(state);
  const { total, totalTTC = 0, tax } = shoppingCart || {};

  const quantityArticles = selectQuantityArticlesFromShoppingCart(state);
  const { iconsUrl = {} } = config;
  const wording = selectWordingFromConfig(state);

  const totalStorage = selectFreeStorageFromPlayer(state);
  const busyStorage = selectBusyStorageFromShoppingCart(state);
  const isOverWeight = config.enabledWeightControl
    ? busyStorage > totalStorage
    : false;

  const { greenColor, redColor, backgroundColor } = selectStyleFromConfig(
    state
  );

  return {
    hasCardBreakdown,
    total,
    totalTTC,
    tax,
    hasContactLessAvailable: totalTTC <= config.maxAmountContactLess,
    hasPaymentAvailable: quantityArticles > 0 && !isOverWeight,
    hasMoneyAvailable: playerMoney.cash > totalTTC,
    hasTaxEnabled: config.hasTaxEnabled,
    paymentCashIconUrl: iconsUrl.paymentCash,
    paymentContactLessIconUrl: iconsUrl.paymentContactLess,
    paymentCardIconUrl: iconsUrl.paymentCard,
    paymentBreakdownIconUrl: iconsUrl.breakdown,
    wording,
    bgColor: backgroundColor,
    greenColor,
    redColor,
    shoppingCart
  };
};

const FooterContainer = compose(
  connect(mapStateToProps),
  withHandlers({
    onCashPayment: ({ shoppingCart }) => () =>
      LUA_FUNCTIONS.onCashPayment({ type: "cash", data: shoppingCart }),
    onBankPayment: ({ hasContactLessAvailable, shoppingCart }) => () => {
      if (hasContactLessAvailable)
        return LUA_FUNCTIONS.onContactLessPayment({
          type: "contact_less",
          data: shoppingCart
        });

      return LUA_FUNCTIONS.onCardPayment({ type: "card", data: shoppingCart });
    }
  }),
  mapProps(omit(["shoppingCart"]))
)(FooterComponent);

export default FooterContainer;
