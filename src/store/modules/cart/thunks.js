import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = [...list, product];

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(addToCart(product));
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();

  const list = cart.filter((product) => product.id !== id);

  localStorage.setItem("cart", JSON.stringify(list));

  dispatch(removeFromCart(list));
};
