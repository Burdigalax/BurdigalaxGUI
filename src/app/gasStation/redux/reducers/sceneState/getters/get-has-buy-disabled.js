import getHasNoEnoughMoney from "../../entities/player/getters/get-has-no-enough-money";
import getGasIsInStock from "../../entities/gases/getters/get-gas-is-in-stock";
import getMaximumQuantityReached from "./get-has-maximum-quantity-reached";
import getCarIsCompatibleWithGas from "../../entities/player/getters/get-car-is-compatible-with-gas";

export const getHasBuyDisabledWithParams = (
  hasNoEnoughMoney,
  gasIsInStock,
  hasMaximumQuantityReached,
  isCarTypeCompatible = true
) =>
  hasNoEnoughMoney ||
  !gasIsInStock ||
  hasMaximumQuantityReached ||
  !isCarTypeCompatible;

export default state => {
  const hasNoEnoughMoney = getHasNoEnoughMoney(state);
  const gasIsInStock = getGasIsInStock(state);
  const hasMaximumQuantityReached = getMaximumQuantityReached(state);
  const isCarTypeCompatible = getCarIsCompatibleWithGas(state);

  return getHasBuyDisabledWithParams(
    hasNoEnoughMoney,
    gasIsInStock,
    hasMaximumQuantityReached,
    isCarTypeCompatible
  );
};
