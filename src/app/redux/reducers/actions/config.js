export const SET_CONFIG = "SET_CONFIG";
export const RESET_CONFIG = "RESET_CONFIG";
export const INIT_STATE = "INIT_STATE";

export const setConfig = data => ({
  type: SET_CONFIG,
  data
});

export const resetConfig = () => ({
  type: RESET_CONFIG
});

export const initialState = initialState => ({
  type: INIT_STATE,
  initialState
});
