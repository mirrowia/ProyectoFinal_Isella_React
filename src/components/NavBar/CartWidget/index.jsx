import { CartContext } from "../../../context";
import "./index.css";
import { useContext, useState } from "react";
import { useEffect } from "react";

function CartWidget() {
  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const countItems = (cartItems) => {
    let totalItems = 0;
    cartItems.forEach(item => {
      totalItems += item.quantity;
    });
    setQuantity(totalItems);
  };

  useEffect(() => {
    if (cart.items !== undefined) {
      countItems(cart.items);
    }
  }, [cart.items]);

  return (
    <>
      <div id="cart-div" className="position-relative">
        <i className="bi bi-cart fs-4 mx-3" />
        <div className="notification-pop">{quantity}</div>
      </div>
    </>
  );
}

export default CartWidget;
