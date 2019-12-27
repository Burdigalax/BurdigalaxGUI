import { find, propEq } from "ramda";

import selectGases from "../../selectors/select-gases";

export default (state, id) => {
  const gases = selectGases(state);
  return find(propEq("id", id), gases);
};
