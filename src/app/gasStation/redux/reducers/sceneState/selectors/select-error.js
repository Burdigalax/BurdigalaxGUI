import { pathOr } from "ramda";

const emptyObject = {};
export default pathOr(emptyObject, ["sceneState", "error"]);
