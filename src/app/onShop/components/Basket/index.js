import { connect } from "react-redux";
import { compose, lifecycle, mapProps } from "recompose";
import { omit } from "ramda";

import BasketComponent from "./component";
import selectShoppingCart from "../../redux/reducers/navigation/shopping-cart/selectors/select-shopping-cart";
import selectStyleFromConfig from "../../redux/reducers/config/selectors/select-style-from-config";
import selectPayment from "../../redux/reducers/navigation/payment/selectors/select-payment";
import { JS_FUNCTIONS } from "../../events";
import {
  setPaymentError,
  setPaymentSuccess
} from "../../redux/actions/payment";

const mapStateToProps = state => {
  const shoppingCart = selectShoppingCart(state);
  const style = selectStyleFromConfig(state);
  const payment = selectPayment(state);

  return {
    ...shoppingCart,
    bgColor: style.basket.backgroundColor,
    hasBgHeader: style.header.backgroundColor,
    hasBody: !payment.error && !payment.success,
    textBasketColor: style.basket.textColor
  };
};

const mapDispatchToProps = {
  setPaymentSuccess,
  setPaymentError
};

const BasketContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { setPaymentError, setPaymentSuccess } = this.props;
      window[JS_FUNCTIONS.prefix] = {
        ...window[JS_FUNCTIONS.prefix],
        [JS_FUNCTIONS.setPaymentError]: setPaymentError,
        [JS_FUNCTIONS.setPaymentSuccess]: setPaymentSuccess
      };
    }
  }),
  mapProps(omit(["setPaymentSuccess", "setPaymentError"]))
)(BasketComponent);

export default BasketContainer;
