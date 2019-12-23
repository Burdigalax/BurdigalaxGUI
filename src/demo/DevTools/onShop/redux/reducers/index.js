import { SET_CODE } from "../actions";
import { mergeDeepRight } from "ramda";

import fixtures from "./fixtures";
import defaultFixtures from "../../../../../app/onShop/redux/sagas/fixtures/shop";

const INITIAL_STATE = {
  module: {
    configEvent: mergeDeepRight(defaultFixtures, fixtures),
    paymentErrorEvent: {
      title: "Erreur",
      message: "Vous n'avez pas assez d'argent"
    },
    paymentSuccessEvent: { title: "Félicitation", message: "Paiement validé" },
    updatePlayerEvent: {
      money: {
        cash: 500
      },
      freeStorageSpace: 200
    },
    updateArticlesEvent: [
      {
        id: 1,
        quantity: 10
      }
    ]
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CODE:
      return {
        ...state,
        module: mergeDeepRight(state.module, action.newCode)
      };
    default:
      return state;
  }
};
