import "./index.css";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/index";
import Add from "./Add";
import Remove from "./Remove";
import Input from "./Input";
import Cart from "./Cart";

function ItemCount({ product, onAdd, stock }) {
  const [order, setOrder] = useState(0);
  const { cart } = useContext(CartContext);

  const add = (e) => {
    if (stock > order) {
      setOrder(order + 1);
    } else {
    }
  };
  const remove = (e) => {
    if (stock >= order && order > 0) {
      setOrder(order - 1);
    } else {
      if (!e.target.classList.contains("setGreyed")) {
        e.target.classList.add("setGreyed");
      }
    }
  };

  useEffect(() => {}, [cart.items]);

  return (
    <div className="item-count-container" onClick={(e) => e.preventDefault()}>
      <div className="item-input-div">
        <Remove remove={remove} order={order} stock={stock} />
        <Input name={product.id} stock={stock} setOrder={setOrder} order={order} />
        <Add add={add} order={order} stock={stock} />
      </div>
      <Cart onAdd={() => onAdd(product, order)} order={order} />
    </div>
  );
}

export default ItemCount;
