export const SET_PLAYER = "SET_PLAYER";
export const UPDATE_PLAYER = "UPDATE_PLAYER";

export const setPlayer = player => ({
  type: SET_PLAYER,
  player
});

export const updatePlayer = player => ({
  type: UPDATE_PLAYER,
  player
});
