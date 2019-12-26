import { find, pipe, propEq, map, mergeDeepLeft } from "ramda";

import { SET_GASES, UPDATE_GASES } from "../../../actions/gases";
import { formatNumber } from "../../../helpers";

const INITIAL_STATE = [];

const formatGas = gas => ({
  ...gas,
  tax: gas.tax || 0,
  type: gas.type || "fuel",
  priceTTC: gas.tax
    ? formatNumber(gas.price + (gas.price * gas.tax) / 100, 2)
    : gas.price
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GASES:
      return map(formatGas, action.gases);
    case UPDATE_GASES:
      return map(gas => {
        const newGas = find(propEq("id", gas.id), action.gases) || {};
        return pipe(mergeDeepLeft(newGas), formatGas)(gas);
      }, state);
    default:
      return state;
  }
};
