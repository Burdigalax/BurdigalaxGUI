export const SET_PAYMENT_ERROR = "SET_PAYMENT_ERROR";
export const SET_CAN_UPDATE_PAYMENT = "SET_CAN_UPDATE_PAYMENT";

export const setPaymentError = ({ title, message }) => ({
  type: SET_PAYMENT_ERROR,
  title,
  message
});

export const setCanUpdatePayment = canUpdatePayment => ({
  type: SET_CAN_UPDATE_PAYMENT,
  canUpdatePayment
});
