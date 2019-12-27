import selectCountBuy from "../selectors/select-count-buy";
import selectFuelValueFromCar from "../../entities/player/selectors/select-fuel-value-from-car";
import selectTankFromCar from "../../entities/player/selectors/select-tank-from-car";

export const getHasMaximumQuantityReachedByCountBuy = (state, countBuy) => {
  const fuelValue = selectFuelValueFromCar(state);
  const tankCar = selectTankFromCar(state);
  return countBuy + fuelValue >= tankCar;
};

export default state => {
  const countBuy = selectCountBuy(state);
  return getHasMaximumQuantityReachedByCountBuy(state, countBuy);
};
