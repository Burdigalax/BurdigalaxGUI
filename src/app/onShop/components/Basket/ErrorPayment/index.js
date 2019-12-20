import React from "react";
import { connect } from "react-redux";
import { compose, branch, renderNothing } from "recompose";

import ResultPayment from "../ResultPayment";
import selectIconsUrlFromConfig from "../../../redux/reducers/config/selectors/select-icons-from-config";
import selectErrorFromPayment from "../../../redux/reducers/navigation/payment/selectors/select-error-from-payment";
import selectStyleFromConfig from "../../../redux/reducers/config/selectors/select-style-from-config";

const mapStateToProps = state => {
  const { errorPayment: errorPaymentDefaultIconUrl } = selectIconsUrlFromConfig(
    state
  );

  const style = selectStyleFromConfig(state);
  const { title, message, iconUrl } = selectErrorFromPayment(state);
  return {
    title,
    message,
    iconUrl: iconUrl || errorPaymentDefaultIconUrl,
    color: style.redColor
  };
};

export default compose(
  connect(mapStateToProps),
  branch(({ title, message }) => !title && !message, renderNothing)
)(ResultPayment);
