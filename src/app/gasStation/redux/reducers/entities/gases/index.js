import { map } from "ramda";

import { SET_GASES } from "../../../actions/gases";
import { formatNumber } from "../../../helpers";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GASES:
      return map(
        gas => ({
          ...gas,
          tax: gas.tax || 0,
          priceTTC: gas.tax
            ? formatNumber(gas.price + (gas.price * gas.tax) / 100, 2)
            : gas.price
        }),
        action.gases
      );
    default:
      return state;
  }
};
