import selectArticleById from "../selectors/select-article-by-id";
import selectArticleByIdFromShoppingCart from "../../../navigation/shopping-cart/selectors/select-article-by-id-from-shopping-cart";

const getQuantityAvailableByArticleId = (state, articleId) => {
  const article = selectArticleById(state, articleId);
  const articleShoppingCart = selectArticleByIdFromShoppingCart(
    state,
    articleId
  );

  if (!article) return 0;
  if (!articleShoppingCart) return article.quantity;

  return article.quantity - articleShoppingCart.quantity;
};

export default getQuantityAvailableByArticleId;
