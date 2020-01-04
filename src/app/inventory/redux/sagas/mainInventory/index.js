import { fork, all, takeEvery, put } from "redux-saga/effects";
import { find, propEq, path, concat, pathOr, mergeDeepRight } from "ramda";

import { INIT_MODULE } from "../../actions/init";
import { setCategories } from "../../actions/categories";
import inventoriesSaga from "../inventories";
import nearbyInventoriesSaga from "../nearbyInventories";
import itemsSaga from "../items";
import {
  setCurrentInventoryId,
  setMainInventoryId
} from "../../actions/inventory";
import initSaga from "../init";
import { setNearbyInventorySelectedId } from "../../actions/nearbyInventories";
import fixturesInventory from "../fixtures";

const getAllCategory = moduleMerged => {
  const nameCategory = path(
    ["config", "wording", "nameAllCategory"],
    moduleMerged
  );
  const iconCategory = path(["config", "iconUrlAllCategory"], moduleMerged);

  return {
    id: "all",
    name: nameCategory,
    iconUrl: iconCategory
  };
};

const getEquipableCategory = moduleMerged => {
  const nameCategory = path(
    ["config", "wording", "nameEquipableCategory"],
    moduleMerged
  );
  const iconCategory = path(
    ["config", "iconUrlEquipableCategory"],
    moduleMerged
  );

  return {
    id: "equipable",
    name: nameCategory,
    iconUrl: iconCategory
  };
};

function* initMainInventory({ module }) {
  const moduleMerged = mergeDeepRight(fixturesInventory, module);
  const hasEquipableCategory = pathOr(
    false,
    ["config", "hasEquipableCategory"],
    moduleMerged
  );

  const allCategory = getAllCategory(moduleMerged);
  const equipableCategory = getEquipableCategory(moduleMerged);

  const defaultCategories = hasEquipableCategory
    ? [allCategory, equipableCategory]
    : [allCategory];

  const categories = concat(defaultCategories, module.categories);

  yield put(setCategories(categories));

  const { mainInventoryId, inventories } = module;
  yield put(setCurrentInventoryId(mainInventoryId));
  yield put(setMainInventoryId(mainInventoryId));

  const selectedNearbyInventoryId = path(
    ["selectedNearbyInventoryId"],
    find(propEq("id", mainInventoryId), inventories)
  );
  yield put(
    setNearbyInventorySelectedId(mainInventoryId, selectedNearbyInventoryId)
  );
}

export default function* root() {
  yield all([
    fork(inventoriesSaga),
    fork(nearbyInventoriesSaga),
    fork(itemsSaga),
    fork(initSaga)
  ]);
  yield takeEvery(INIT_MODULE, initMainInventory);
}
