import { ADD_CART } from "./actionTypes";
import { REMOVE_CART } from "./actionTypes";

const defautState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defautState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];
    case REMOVE_CART:
      const { list } = action;

      return list;
    default:
      return state;
  }
};
export default cartReducer;
