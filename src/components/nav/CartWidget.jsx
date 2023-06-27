import { useState } from "react";
import "./CartWidget.css";

function CartWidget() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <div id="cart-div" className="position-relative">
        <i className="bi bi-cart fs-4 mx-3" />
        <div className="notification-pop">{cartItems}</div>
      </div>
    </>
  );
}

export default CartWidget;
