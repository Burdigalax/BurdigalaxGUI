import selectGasById from "../../../entities/gases/selectors/select-gas-by-id";
import selectCountBuy from "../../../sceneState/selectors/select-count-buy";
import selectGasSelectedId from "../../../sceneState/selectors/select-gas-selected-id";
import selectConfig from "../../../../../../redux/reducers/config/selectors/select-config";

export default (state, gasId) => {
  const { enabledStockLimitation } = selectConfig(state);
  if (!enabledStockLimitation) return true;

  const countBuy = selectCountBuy(state);
  const gas = selectGasById(state, gasId);
  const gasSelectedId = selectGasSelectedId(state);

  if (gasSelectedId !== gas.id) return gas.quantity;

  return gas.quantity - countBuy > 0;
};
