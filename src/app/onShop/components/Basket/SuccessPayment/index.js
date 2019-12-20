import React from "react";
import { connect } from "react-redux";
import { compose, branch, renderNothing } from "recompose";

import ResultPayment from "../ResultPayment";
import selectIconsUrlFromConfig from "../../../redux/reducers/config/selectors/select-icons-from-config";
import selectSuccessFromPayment from "../../../redux/reducers/navigation/payment/selectors/select-success-from-payment";
import selectStyleFromConfig from "../../../redux/reducers/config/selectors/select-style-from-config";

const mapStateToProps = state => {
  const {
    successPayment: successPaymentDefaultIconUrl
  } = selectIconsUrlFromConfig(state);
  const { title, message, iconUrl } = selectSuccessFromPayment(state);
  const style = selectStyleFromConfig(state);

  return {
    title,
    message,
    iconUrl: iconUrl || successPaymentDefaultIconUrl,
    color: style.greenColor
  };
};

export default compose(
  connect(mapStateToProps),
  branch(({ title, message }) => !title && !message, renderNothing)
)(ResultPayment);
