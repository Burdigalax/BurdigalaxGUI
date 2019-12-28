import { put, takeEvery } from "redux-saga/effects";

import { SET_CATEGORY_SELECTED_ID } from "../actions/categories";
import { setItemSelectedId } from "../actions/items";

function* setCategorySelected({ id }) {
  yield put(setItemSelectedId(null));
}

export default function*() {
  yield takeEvery(SET_CATEGORY_SELECTED_ID, setCategorySelected);
}
