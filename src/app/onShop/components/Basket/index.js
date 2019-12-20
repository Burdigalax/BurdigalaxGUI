import { connect } from "react-redux";
import { compose, lifecycle, withHandlers, mapProps } from "recompose";
import { omit } from "ramda";

import BasketComponent from "./component";
import selectShoppingCart from "../../redux/reducers/navigation/shopping-cart/selectors/select-shopping-cart";
import selectStyleFromConfig from "../../redux/reducers/config/selectors/select-style-from-config";
import selectPayment from "../../redux/reducers/navigation/payment/selectors/select-payment";
import {
  paymentError as paymentErrorEvent,
  paymentSuccess as paymentSuccessEvent
} from "../../events";
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
    bgColor: style.basketBackgroundColor,
    hasBody: !payment.error && !payment.success
  };
};

const mapDispatchToProps = {
  setPaymentSuccess,
  setPaymentError
};

const BasketContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    paymentError: ({ setPaymentError }) => (data = {}) => {
      const { detail } = data;
      if (!detail) return;

      setPaymentError(detail.title, detail.message, detail.iconUrl);
    },
    paymentSuccess: ({ setPaymentSuccess }) => (data = {}) => {
      const { detail } = data;
      if (!detail) return;

      setPaymentSuccess(detail.title, detail.message, detail.iconUrl);
    }
  }),
  lifecycle({
    componentDidMount() {
      const { paymentError, paymentSuccess } = this.props;
      window.addEventListener(paymentErrorEvent, paymentError);
      window.addEventListener(paymentSuccessEvent, paymentSuccess);
    },
    componentWillUnmount() {
      const { paymentError, paymentSuccess } = this.props;
      window.removeEventListener(paymentErrorEvent, paymentError);
      window.removeEventListener(paymentSuccessEvent, paymentSuccess);
    }
  }),
  mapProps(
    omit([
      "paymentError",
      "paymentSuccess",
      "setPaymentSuccess",
      "setPaymentError"
    ])
  )
)(BasketComponent);

export default BasketContainer;
