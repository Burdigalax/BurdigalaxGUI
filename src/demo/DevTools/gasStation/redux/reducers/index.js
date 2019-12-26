import { mergeDeepRight } from "ramda";

import fixtures from "./fixtures";
import defaultFixtures from "../../../../../app/gasStation/redux/sagas/fixtures/gasStation";

const INITIAL_STATE = {
  defaultCode: {
    setConfig: mergeDeepRight(defaultFixtures, fixtures),
    updatePlayer: { money: 500, car: { fuelValue: 15 } },
    updateStation: {
      ...fixtures.station,
      isOpen: false
    },
    updateGases: [{ id: 1, quantity: 100, price: 2, tax: 20 }],
    setPaymentError: {
      title: "Une erreur est survenue",
      message: "Vous n'avez pas assez d'argent."
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
