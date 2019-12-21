// export const paymentError = "@Burdigalax-shop:paymentError";
// export const paymentSuccess = "@Burdigalax-shop:paymentSuccess";
// export const config = "@Burdigalax-shop:config";
// export const cashPayment = "@Burdigalax-shop:cashPayment";
// export const contactLessPayment = "@Burdigalax-shop:contactLessPayment";
// export const cardPayment = "@Burdigalax-shop:cardPayment";
// export const onClose = "@Burdigalax-shop:onClose";
// export const resetBasket = "@Burdigalax-shop:resetBasket";
// export const updateArticles = "@Burdigalax-shop:updateArticles";
// export const updatePlayer = "@Burdigalax-player:updatePlayer";

export const prefix = "BURDIGALAX_onShop";

export const setConfig = "setConfig";
export const resetBasket = "resetBasket";
export const updateArticles = "updateArticles";
export const updatePlayer = "updatePlayer";
export const setPaymentError = "setPaymentError";
export const setPaymentSuccess = "setPaymentSuccess";

export const onClose = "BURDIGALAX_onShop_onClose";
export const onCardPayment = "BURDIGALAX_onShop_onCardPayment";
export const onContactLessPayment = "BURDIGALAX_onShop_onContactLessPayment";
export const onCashPayment = "BURDIGALAX_onShop_onCashPayment";

export const JS_FUNCTIONS = {
  prefix,
  setConfig,
  resetBasket,
  updateArticles,
  updatePlayer,
  setPaymentError,
  setPaymentSuccess
};

const callEvent = (name, value) => {
  console.log("callEvent :", name, value);
  ue.game.callevent(name, value);
};

export const LUA_FUNCTIONS = {
  onClose: () => callEvent(onClose),
  onCardPayment: data => callEvent(onCardPayment, data),
  onContactLessPayment: data => callEvent(onContactLessPayment, data),
  onCashPayment: data => callEvent(onCashPayment, data)
};
