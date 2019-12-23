import React from "react";
import { connect } from "react-redux";

import { Wrapper } from "./styles";
import selectIconsUrlFromConfig from "../../../../redux/reducers/config/selectors/select-icons-from-config";
import Icon from "../../../../common/components/Icon";
import selectWordingFromConfig from "../../../../redux/reducers/config/selectors/select-wording-from-config";
import selectStyleFromConfig from "../../../../redux/reducers/config/selectors/select-style-from-config";

const EmptyBasket = ({
  emptyBasketIconUrl = "",
  wording,
  textBasketColor = "#3d7b56"
}) => (
  <Wrapper>
    <h3>{wording.emptyBasket}</h3>
    <Icon url={emptyBasketIconUrl} size={60} color={textBasketColor} />
  </Wrapper>
);

const mapStateToProps = state => {
  const iconsUrl = selectIconsUrlFromConfig(state);
  const wording = selectWordingFromConfig(state);
  const style = selectStyleFromConfig(state);

  return {
    emptyBasketIconUrl: iconsUrl.emptyBasket,
    textBasketColor: style.basket.textColor,
    wording
  };
};

export default connect(mapStateToProps)(EmptyBasket);
