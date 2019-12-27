import React from "react";
import { connect } from "react-redux";
import { compose, branch, renderNothing } from "recompose";

import { LUA_FUNCTIONS } from "../../../events";
import ResultPayment from "../ResultPayment";
import selectIconsUrlFromConfig from "../../../../redux/reducers/config/selectors/select-icons-from-config";
import selectSuccessFromPayment from "../../../redux/reducers/navigation/payment/selectors/select-success-from-payment";
import selectStyleFromConfig from "../../../../redux/reducers/config/selectors/select-style-from-config";
import selectWordingFromConfig from "../../../../redux/reducers/config/selectors/select-wording-from-config";

const mapStateToProps = state => {
  const {
    successPayment: successPaymentDefaultIconUrl
  } = selectIconsUrlFromConfig(state);
  const { title, message, iconUrl } = selectSuccessFromPayment(state);
  const style = selectStyleFromConfig(state);

  const wording = selectWordingFromConfig(state);

  return {
    title,
    labelButton: wording.exit,
    message,
    iconUrl: iconUrl || successPaymentDefaultIconUrl,
    color: style.greenColor
  };
};

const mapDispatchToProps = {
  onClick: LUA_FUNCTIONS.onClose
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(({ title, message }) => !title && !message, renderNothing)
)(ResultPayment);
