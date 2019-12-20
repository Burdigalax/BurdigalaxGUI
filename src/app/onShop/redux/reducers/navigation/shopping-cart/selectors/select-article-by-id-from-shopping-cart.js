import { pipe, find, path } from "ramda";

export default (state, id) =>
  pipe(
    path(["navigation", "shoppingCart", "articles"]),
    find(article => article.id === id)
  )(state);
