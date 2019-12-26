import selectMoneyFromPlayer from "../selectors/select-money-from-player";
import selectShoppingCart from "../../../sceneState/selectors/select-shopping-cart";
import { formatNumber } from "../../../../helpers";

export default state => {
  const initialMoney = selectMoneyFromPlayer(state);
  const shoppingCart = selectShoppingCart(state);
  return shoppingCart.totalTTC
    ? formatNumber(initialMoney - shoppingCart.totalTTC)
    : initialMoney;
};
