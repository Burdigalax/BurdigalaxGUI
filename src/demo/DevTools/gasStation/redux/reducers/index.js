import { mergeDeepRight } from "ramda";

import fixtures from "./fixtures";
import defaultFixtures from "../../../../../app/onGasStation/redux/sagas/fixtures/gasStation";

const INITIAL_STATE = {
  defaultCode: {
    setConfig: mergeDeepRight(defaultFixtures, fixtures)
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
