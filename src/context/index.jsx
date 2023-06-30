import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={cartItems}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
