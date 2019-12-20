import React from "react";
import { connect } from "react-redux";

import Icon from "../../../../common/components/Icon";
import { Message, ResultButton, Title, Wrapper } from "./styles";
import { black } from "../../../../common/colors";
import { BTN_VARIANT } from "../../../../common/components/BurdiButton/constants";
import selectWordingFromConfig from "../../../redux/reducers/config/selectors/select-wording-from-config";
import { resetPayment } from "../../../redux/actions/payment";

const Result = ({
  title,
  message,
  iconUrl = "",
  color = black,
  backLabel = "Retour au panier",
  resetPayment = Function.prototype
}) => (
  <Wrapper>
    <Title color={color}>{title}</Title>
    <Icon url={iconUrl} color={color} size={45} />
    <Message color={color}>{message}</Message>
    <ResultButton
      label={backLabel}
      color={color}
      onClick={resetPayment}
      variant={BTN_VARIANT.secondary}
    />
  </Wrapper>
);

const mapStateToProps = state => {
  const wording = selectWordingFromConfig(state);
  return {
    backLabel: wording.backBasket
  };
};

const mapDispatchToProps = {
  resetPayment
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
