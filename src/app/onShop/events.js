export const prefix = "BURDIGALAX_onShop";

export const setConfig = "setConfig";
export const reset = "reset";
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
  reset,
  updateArticles,
  updatePlayer,
  setPaymentError,
  setPaymentSuccess
};

const callEvent = (name, value) => {
  console.log("callEvent :", name, value);
  try {
    ue.game.callevent(name, JSON.stringify(value));
  } catch (e) {}
};

export const LUA_FUNCTIONS = {
  onClose: () => callEvent(onClose),
  onCardPayment: data => callEvent(onCardPayment, data),
  onContactLessPayment: data => callEvent(onContactLessPayment, data),
  onCashPayment: data => callEvent(onCashPayment, data)
};
