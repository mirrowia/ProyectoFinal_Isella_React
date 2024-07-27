import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    items: [],
  });

  const onAdd = (product, order) => {
    const cartIndex = cart.items.findIndex((item) => item.id === product.id);
    if (cartIndex >= 0) {
      const newCart = structuredClone(cart);
      const newProduct = cart.items[cartIndex];
      newProduct.quantity += order;
      newCart.items[cartIndex] = newProduct;
      setCart(newCart);
    } else {
      const newCart = structuredClone(cart);
      const newProduct = structuredClone(product);
      newProduct.quantity = parseInt(order);
      newCart.items = [...newCart.items, newProduct];
      setCart(newCart);
    }
  };

  useEffect(() => {
    if (cart.items.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(cart.items));
    } else {
      if (localStorage.getItem("cart"))
        cart.items = JSON.parse(localStorage.getItem("cart"));
      setCart(cart);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, onAdd }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
