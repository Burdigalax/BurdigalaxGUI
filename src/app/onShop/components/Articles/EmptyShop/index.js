import React from "react";
import { connect } from "react-redux";

import { Wrapper } from "./styles";
import Icon from "../../../../common/components/Icon";
import selectIconsUrlFromConfig from "../../../redux/reducers/config/selectors/select-icons-from-config";

const EmptyShop = ({ className, emptyBoxUrl }) => (
  <Wrapper className={className}>
    <h3>Please send data ! </h3>
    <Icon url={emptyBoxUrl} size={70} />
  </Wrapper>
);

const mapStateToProps = state => {
  const iconsUrl = selectIconsUrlFromConfig(state);
  return {
    emptyBoxUrl: iconsUrl.emptyBox
  };
};

export default connect(mapStateToProps)(EmptyShop);
