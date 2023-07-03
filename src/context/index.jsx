import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const isInCart = cartItems.findIndex((item) => item.id === product.id);
    if (isInCart >= 0) {
    } else {
      setCartItems([...cartItems, product]);
    }
  };
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, onAdd }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
