import React from "react";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";

import EffectComponent from "./component";
import selectEffectById from "../../../../redux/reducers/entities/effects/selectors/select-effect-by-id";
import selectStyleFromConfig from "../../../../../redux/reducers/config/selectors/select-style-from-config";

const mapStateToProps = (state, { id, value }) => {
  const effect = selectEffectById(state, id);
  const style = selectStyleFromConfig(state);
  return {
    name: effect.name,
    iconUrl: effect.iconUrl,
    value,
    unit: effect.unit,
    greenColor: style.greenColor,
    redColor: style.redColor
  };
};

export default compose(
  setDisplayName("EffectContainer"),
  connect(mapStateToProps)
)(EffectComponent);
