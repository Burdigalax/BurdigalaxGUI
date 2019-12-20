import { takeEvery } from "@redux-saga/core/effects";

import { SET_CODE } from "../actions";
import { config as configEvent } from "../../../../../app/onShop/events";

function* setCode({ newCode }) {
  if (!newCode) return;

  const event = new CustomEvent(configEvent, {
    detail: newCode
  });
  window.dispatchEvent(event);
}

export default function*() {
  // yield takeEvery(SET_CODE, setCode);
}
