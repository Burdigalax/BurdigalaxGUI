import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import HeaderComponent from "../../../common/components/Header";
import selectStyleFromConfig from "../../../redux/reducers/config/selectors/select-style-from-config";
import selectStation from "../../redux/reducers/entities/station/selectors/select-station";
import { LUA_FUNCTIONS } from "../../events";

const mapStateToProps = state => {
  const { header } = selectStyleFromConfig(state);
  const { name, iconUrl } = selectStation(state);
  return {
    name: name,
    iconUrl: iconUrl,
    iconColor: header.iconColor,
    iconSize: header.iconSize,
    bgColor: header.backgroundColor,
    titleColor: header.titleColor,
    closeButtonColor: header.closeButtonColor,
    onClose: LUA_FUNCTIONS.onClose
  };
};

export default compose(connect(mapStateToProps))(HeaderComponent);
