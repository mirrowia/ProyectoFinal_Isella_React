import "./index.css";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/index";
import Add from "./Add";
import Remove from "./Remove";
import Input from "./Input";
import Cart from "./Cart";

function ItemCount({ product, onAdd }) {
  const [order, setOrder] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);

  const add = (e) => {
    if (product.stock > order) {
      setOrder(order + 1);
    } else {
    }
  };
  const remove = (e) => {
    if (product.stock >= order && order > 0) {
      setOrder(order - 1);
    } else {
      if (!e.target.classList.contains("setGreyed")) {
        e.target.classList.add("setGreyed");
      }
    }
  };

  useEffect(() => {}, [cartItems]);

  return (
    <div className="item-count-container" onClick={(e) => e.preventDefault()}>
      <div className="item-input-div">
        <Remove remove={remove} order={order} stock={product.stock} />
        <Input order={order} />
        <Add add={add} order={order} stock={product.stock} />
      </div>
      <Cart onAdd={() => onAdd(product, order)} order={order} />
    </div>
  );
}

export default ItemCount;
