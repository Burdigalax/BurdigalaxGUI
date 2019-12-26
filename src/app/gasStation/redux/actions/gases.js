export const SET_GASES = "SET_GASES";
export const SET_GAS_SELECTED_ID = "SET_GAS_SELECTED_ID";
export const ON_BUY = "ON_BUY";
export const STOP_BUY = "STOP_BUY";

export const setGases = gases => ({
  type: SET_GASES,
  gases
});

export const setGasSelectedId = gasId => ({
  type: SET_GAS_SELECTED_ID,
  gasId
});

export const onBuy = () => ({
  type: ON_BUY
});

export const stopBuy = () => ({
  type: STOP_BUY
});
