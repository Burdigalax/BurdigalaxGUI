export const SET_PAYMENT_ERROR = "SET_PAYMENT_ERROR";
export const SET_PAYMENT_SUCCESS = "SET_PAYMENT_SUCCESS";
export const RESET_PAYMENT = "RESET_PAYMENT";

export const setPaymentError = (title, message, iconUrl) => ({
  type: SET_PAYMENT_ERROR,
  title,
  message,
  iconUrl
});

export const setPaymentSuccess = (title, message, iconUrl) => ({
  type: SET_PAYMENT_SUCCESS,
  title,
  message,
  iconUrl
});

export const resetPayment = () => ({
  type: RESET_PAYMENT
});
