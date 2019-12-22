import { pathOr } from "ramda";

export default state =>
  pathOr([], ["entities", "shop", "articlesIdsByCategory"], state);
