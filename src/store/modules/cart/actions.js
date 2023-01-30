import { ADD_CART } from "./actionTypes";
import { REMOVE_CART } from "./actionTypes";

export const addToCart = (product) => ({
  type: ADD_CART,
  product,
});

export const removeFromCart = (list) => ({
  type: REMOVE_CART,
  list,
});
