import { connect } from "react-redux";
import { branch, compose, renderNothing } from "recompose";

import WeightControlComponent from "./component";
import selectIconsUrlFromConfig from "../../../../redux/reducers/config/selectors/select-icons-from-config";
import selectFreeStorageFromPlayer from "../../../../redux/reducers/entities/player/selectors/select-free-storage-from-player";
import selectBusyStorageFromShoppingCart from "../../../../redux/reducers/navigation/shopping-cart/selectors/select-busy-storage-from-shopping-cart";
import selectConfig from "../../../../redux/reducers/config/selectors/select-config";
import selectStyleFromConfig from "../../../../redux/reducers/config/selectors/select-style-from-config";

const mapStateToProps = state => {
  const iconsUrl = selectIconsUrlFromConfig(state);
  const totalStorage = selectFreeStorageFromPlayer(state);
  const busyStorage = selectBusyStorageFromShoppingCart(state);
  const config = selectConfig(state);
  const style = selectStyleFromConfig(state);

  return {
    weightIconUrl: iconsUrl.weight,
    busyStorage,
    totalStorage,
    isOverweight: busyStorage > totalStorage,
    enabledWeightControl: config.enabledWeightControl,
    redColor: style.redColor
  };
};

export default compose(
  connect(mapStateToProps),
  branch(
    ({ totalStorage, enabledWeightControl }) =>
      !totalStorage || !enabledWeightControl,
    renderNothing
  )
)(WeightControlComponent);
