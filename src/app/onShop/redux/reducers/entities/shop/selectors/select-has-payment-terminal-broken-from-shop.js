import { pathOr } from "ramda";

export default state =>
  pathOr(false, ["entities", "shop", "hasPaymentTerminalBroken"], state);
