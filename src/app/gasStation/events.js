export const prefix = "BURDIGALAX_gasStation";

export const setConfig = "setConfig";
export const updatePlayer = "updatePlayer";
export const updateStation = "updateStation";
export const updateGases = "updateGases";
export const setPaymentError = "setPaymentError";

export const onClose = "BURDIGALAX_gasStation_onClose";
export const onPayment = "BURDIGALAX_gasStation_onPayment";

export const JS_FUNCTIONS = {
  prefix,
  setConfig,
  updatePlayer,
  updateStation,
  updateGases,
  setPaymentError
};

const callEvent = (name, value) => {
  console.log("callEvent :", name, value);
  try {
    ue.game.callevent(name, JSON.stringify(value));
  } catch (e) {
    //console.warn(e);
  }
};

export const LUA_FUNCTIONS = {
  onClose: () => callEvent(onClose),
  onPayment: data => callEvent(onPayment, data)
};
