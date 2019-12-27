import React from "react";
import { connect } from "react-redux";

import Icon from "../../../common/components/Icon";
import { Title, Message, CloseShop } from "./styles";
import selectIconsFromConfig from "../../../redux/reducers/config/selectors/select-icons-from-config";
import selectStation from "../../redux/reducers/entities/selectors/select-station";
import selectStyleFromConfig from "../../../redux/reducers/config/selectors/select-style-from-config";

const CloseShopComponent = ({
  iconUrl,
  title,
  message,
  closeTitleColor,
  closeMessageColor
}) => (
  <CloseShop>
    <Icon url={iconUrl} size={80} />
    <Title color={closeTitleColor}>{title}</Title>
    <Message color={closeMessageColor}>{message}</Message>
  </CloseShop>
);

const mapStateToProps = state => {
  const { closeShop: iconUrl } = selectIconsFromConfig(state);
  const { station } = selectStyleFromConfig(state) || {};
  const { closeTitle, closeMessage } = selectStation(state);

  return {
    iconUrl,
    title: closeTitle,
    message: closeMessage,
    closeTitleColor: station.closeTitleColor,
    closeMessageColor: station.closeMessageColor
  };
};

export default connect(mapStateToProps)(CloseShopComponent);
