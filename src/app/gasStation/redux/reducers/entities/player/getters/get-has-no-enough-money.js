import getRemainingMoney from "./get-remaining-money-from-player";
import getCurrentGasSelected from "../../../sceneState/getters/get-current-gas-selected";

export const getHasNoEnoughMoneyByRemainingMoney = (state, remainingMoney) => {
  const gasSelected = getCurrentGasSelected(state);
  if (!gasSelected) return remainingMoney <= 0;

  return remainingMoney - gasSelected.priceTTC <= 0;
};

export default state => {
  const remainingMoney = getRemainingMoney(state);
  return getHasNoEnoughMoneyByRemainingMoney(state, remainingMoney);
};
