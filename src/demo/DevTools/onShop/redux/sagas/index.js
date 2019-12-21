import { takeEvery } from "@redux-saga/core/effects";

import { SET_CODE } from "../actions";
import { JS_FUNCTIONS } from "../../../../../app/onShop/events";

function* setCode({ newCode }) {
  if (!newCode) return;

  window[JS_FUNCTIONS.prefix][JS_FUNCTIONS.setConfig](newCode);
}

export default function*() {
  // yield takeEvery(SET_CODE, setCode);
}
