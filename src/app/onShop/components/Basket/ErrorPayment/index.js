import React from "react";
import { connect } from "react-redux";
import { compose, branch, renderNothing } from "recompose";

import { resetPayment } from "../../../redux/actions/payment";
import ResultPayment from "../ResultPayment";
import selectIconsUrlFromConfig from "../../../../redux/reducers/config/selectors/select-icons-from-config";
import selectErrorFromPayment from "../../../redux/reducers/navigation/payment/selectors/select-error-from-payment";
import selectStyleFromConfig from "../../../../redux/reducers/config/selectors/select-style-from-config";
import selectWordingFromConfig from "../../../../redux/reducers/config/selectors/select-wording-from-config";

const mapStateToProps = state => {
  const { errorPayment: errorPaymentDefaultIconUrl } = selectIconsUrlFromConfig(
    state
  );
  const wording = selectWordingFromConfig(state);

  const style = selectStyleFromConfig(state);
  const { title, message, iconUrl } = selectErrorFromPayment(state);
  return {
    labelButton: wording.backBasket,
    title,
    message,
    iconUrl: iconUrl || errorPaymentDefaultIconUrl,
    color: style.redColor
  };
};

const mapDispatchToProps = {
  onClick: resetPayment
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(({ title, message }) => !title && !message, renderNothing)
)(ResultPayment);
