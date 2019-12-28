export const SET_EFFECTS = "SET_EFFECTS";
export const UPDATE_EFFECTS = "UPDATE_EFFECTS";

export const setEffects = effects => ({
  type: SET_EFFECTS,
  effects
});

export const updateEffects = effects => ({
  type: UPDATE_EFFECTS,
  effects
});
