export const GET_PLAYER_SUCCESS = "GET_PLAYER_SUCCESS";
export const UPDATE_PLAYER_SUCCESS = "UPDATE_PLAYER_SUCCESS";

export const getPlayerSuccess = data => ({
  type: GET_PLAYER_SUCCESS,
  data
});

export const updatePlayerSuccess = player => ({
  type: UPDATE_PLAYER_SUCCESS,
  player
});
