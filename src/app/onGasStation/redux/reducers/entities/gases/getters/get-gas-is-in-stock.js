import getCurrentGasSelected from "../../../sceneState/getters/get-current-gas-selected";
import selectCountBuy from "../../../sceneState/selectors/select-count-buy";
import selectConfig from "../../../../../../redux/reducers/config/selectors/select-config";

export const getGasIsInStockByQuantityBuy = (state, quantityBuy) => {
  const { enabledStockLimitation } = selectConfig(state);
  if (!enabledStockLimitation) return true;

  const gasSelected = getCurrentGasSelected(state);
  if (!gasSelected) return false;

  return gasSelected.quantity - quantityBuy > 0;
};

export default state => {
  const countBuy = selectCountBuy(state);
  return getGasIsInStockByQuantityBuy(state, countBuy);
};
