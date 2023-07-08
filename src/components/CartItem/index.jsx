import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context";

const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = (itemId) => {
    const filteredCart = cart.items.filter((item) => item.id !== itemId);
    if (filteredCart.length === 0) {
      const newCart = structuredClone(cart);
      newCart.items = [];
      localStorage.setItem("cart", []);
    }
    const newCart = structuredClone(cart);
    newCart.items = filteredCart;
    setCart(newCart);
  };

  return (
    <div key={item.id} className={"cart-product"}>
      <Link to={"/item/" + item.id}>
        <img src={item.cover} alt="cover" />
      </Link>
      <div className="product-cart-body">
        <div>
          <p className="product-cart-title">
            {item.title} #{item.volume}
          </p>
        </div>
        <div className="product-cart-quantity">
          <p>{item.quantity}</p>
          <i className="bi bi-trash-fill" onClick={() => removeItem(item.id)} />
        </div>
        <div className="product-cart-price">
          <p className="product-cart-body-price">
            ${item.price * item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
