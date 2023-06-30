import { CartContext } from "../../../context";
import "./index.css";
import { useContext, useState } from "react";

function CartWidget() {
  const cartItems = useContext(CartContext);

  console.log(cartItems);

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
