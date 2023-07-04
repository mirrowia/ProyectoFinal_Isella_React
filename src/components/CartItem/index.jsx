import "./index.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context";

const CartItem = ({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeItem = (itemId) => {
    console.log(cartItems);
  };

  return (
    <div key={item.id} className={"cart-product"}>
      <Link to={"/item/" + item.id}>
        <img src={item.cover} alt="cover" />
      </Link>
      <div className="product-card-body">
        <div>
          <p className="product-card-title">
            {item.title} #{item.volume}
          </p>
        </div>
        <div className="product-card-quantity">
          <p>{item.quantity}</p>
          <i className="bi bi-trash-fill" onClick={() => removeItem(item.id)} />
        </div>
        <div className="product-card-price">
          <p className="product-card-body-price">
            ${item.price * item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
