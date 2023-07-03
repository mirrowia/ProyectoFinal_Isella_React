import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product, order) => {
    const cartIndex = cartItems.findIndex((item) => item.id === product.id);
    if (cartIndex >= 0) {
      const newCart = structuredClone(cartItems);
      const newProduct = cartItems[cartIndex];

      newProduct.quantity += order;
      newCart[cartIndex] = newProduct;
      setCartItems(newCart);
    } else {
      const newProduct = structuredClone(product);
      newProduct.quantity = parseInt(order);
      setCartItems([...cartItems, newProduct]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, onAdd }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
