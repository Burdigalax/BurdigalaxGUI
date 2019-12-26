import selectGasSelectedId from "../selectors/select-gas-selected-id";
import selectGasById from "../../entities/gases/selectors/select-gas-by-id";

export default state => {
  const gasSelectedId = selectGasSelectedId(state);
  return selectGasById(state, gasSelectedId);
};
