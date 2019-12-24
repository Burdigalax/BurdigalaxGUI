import getCurrentGasSelected from "../../../sceneState/getters/get-current-gas-selected";
import selectCountBuy from "../../../sceneState/selectors/select-count-buy";

export const getGasIsInStockByQuantityBuy = (state, quantityBuy) => {
  const gasSelected = getCurrentGasSelected(state);
  if (!gasSelected) return false;

  return gasSelected.quantity - quantityBuy > 0;
};

export default state => {
  const countBuy = selectCountBuy(state);
  return getGasIsInStockByQuantityBuy(state, countBuy);
};
