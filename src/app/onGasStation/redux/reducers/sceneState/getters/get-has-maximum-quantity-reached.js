import selectCountBuy from "../selectors/select-count-buy";
import selectFuelValueFromCar from "../../entities/player/selectors/select-fuel-value-from-car";

export const getHasMaximumQuantityReachedByCountBuy = (state, countBuy) => {
  const fuelValue = selectFuelValueFromCar(state);
  return countBuy + fuelValue >= 100;
};

export default state => {
  const countBuy = selectCountBuy(state);
  return getHasMaximumQuantityReachedByCountBuy(state, countBuy);
};
