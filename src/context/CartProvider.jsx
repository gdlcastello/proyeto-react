import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItem = (product, quantity) => {
    const itemInCart = isInCart(product.Id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.Id === product.Id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });

      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    setCartCount((prevCount) => prevCount + quantity);
  };

  const removeItem = (Id) => {
    const newCart = cart.filter((item) => item.Id !== Id);
    setCart(newCart);

    
    const itemCount = cart.find((item) => item.Id === Id)?.quantity || 0;
    setCartCount((prevCount) => prevCount - itemCount);
  };

  const clear = () => {
    setCart([]);
    setCartCount(0);
  };

  const isInCart = (Id) => {
    return cart.some((item) => item.Id === Id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


