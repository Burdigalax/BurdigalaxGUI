import { pathOr } from "ramda";

export default pathOr(0, ["entities", "player", "money"]);
