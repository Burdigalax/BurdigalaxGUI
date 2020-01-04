import React from "react";
import { connect } from "react-redux";

import { Effect } from "./styles";
import Icon from "../../../../common/components/Icon";
import selectEffectById from "../../../redux/reducers/entities/effects/selectors/select-effect-by-id";

const EffectComponent = ({ iconUrl, value, unit, name }) => (
  <Effect value={value}>
    <Icon url={iconUrl} size={30} />
    {value > 0 ? "+" : ""}
    {value}
    {unit}
  </Effect>
);

const mapStateToProps = (state, props) => {
  const { unit, url, iconUrl } = selectEffectById(state, props.id);
  return {
    value: props.value,
    unit,
    iconUrl,
    name
  };
};

export default connect(mapStateToProps)(EffectComponent);
