import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
  isInCart: () => {},
  cartCount: 0,
});

export default CartContext;
