export const RESET_SHOPPING_CART = "RESET_SHOPPING_CART";
export const UPDATE_SHOPPING_CART = "UPDATE_SHOPPING_CART";

export const resetShoppingCart = () => ({
  type: RESET_SHOPPING_CART
});

export const updateShoppingCart = data => ({
  type: UPDATE_SHOPPING_CART,
  data
});
