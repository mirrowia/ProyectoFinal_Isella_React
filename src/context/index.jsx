import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const cart = {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      items: [],
    };
    const storedCartItems = localStorage.getItem("cart");
    return storedCartItems ? { ...cart, items: JSON.parse(storedCartItems) } : cart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.items));
  }, [cart]);

  const onAdd = (product, order) => {
    const cartIndex = cart.items.findIndex((item) => item.id === product.id);
    const newCart = structuredClone(cart);
    if (cartIndex >= 0) {
      const newProduct = { ...cart.items[cartIndex] };
      newProduct.quantity += order;
      newCart.items[cartIndex] = newProduct;
    } else {
      const newProduct = { ...product, quantity: parseInt(order, 10) };
      newCart.items = [...newCart.items, newProduct];
    }
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, onAdd }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
