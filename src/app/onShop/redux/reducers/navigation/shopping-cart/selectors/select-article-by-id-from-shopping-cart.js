import { pipe, find, pathOr } from "ramda";

export default (state, id) =>
  pipe(
    pathOr([], ["navigation", "shoppingCart", "articles"]),
    find(article => article.id === id)
  )(state);
