export const SET_STATION = "SET_STATION";
export const UPDATE_STATION = "UPDATE_STATION";

export const setStation = station => ({
  type: SET_STATION,
  station
});

export const updateStation = station => ({
  type: UPDATE_STATION,
  station
});
