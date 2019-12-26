import getHasNoEnoughMoney from "../../entities/player/getters/get-has-no-enough-money";
import getGasIsInStock from "../../entities/gases/getters/get-gas-is-in-stock";
import getMaximumQuantityReached from "./get-has-maximum-quantity-reached";

export const getHasBuyDisabledWithParams = (
  hasNoEnoughMoney,
  gasIsInStock,
  hasMaximumQuantityReached
) => hasNoEnoughMoney || !gasIsInStock || hasMaximumQuantityReached;

export default state => {
  const hasNoEnoughMoney = getHasNoEnoughMoney(state);
  const gasIsInStock = getGasIsInStock(state);
  const hasMaximumQuantityReached = getMaximumQuantityReached(state);

  return getHasBuyDisabledWithParams(
    hasNoEnoughMoney,
    gasIsInStock,
    hasMaximumQuantityReached
  );
};
