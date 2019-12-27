export const SET_PAYMENT_ERROR = "SET_PAYMENT_ERROR";

export const setPaymentError = ({ title, message }) => ({
  type: SET_PAYMENT_ERROR,
  title,
  message
});
