import { map, sum, pipe } from "ramda";

import selectArticlesFromShoppingCart from "./select-articles-from-shopping-cart";

export default pipe(
  selectArticlesFromShoppingCart,
  map(article => article.quantity),
  sum
);
