import selectCarFromPlayer from "../selectors/select-car-from-player";
import getCurrentGasSelected from "../../../sceneState/getters/get-current-gas-selected";

export default state => {
  const car = selectCarFromPlayer(state);
  const gasSelected = getCurrentGasSelected(state);
  if (!gasSelected) return true;
  if (!car.type || car.type === "hybrid") return true;

  return gasSelected.type === car.type;
};
