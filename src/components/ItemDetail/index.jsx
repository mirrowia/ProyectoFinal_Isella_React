import "./index.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context";

const ItemDetail = (product) => {
  const [stockClass, setStockClass] = useState("");
  const { onAdd, cartItems } = useContext(CartContext);
  const [stock, setStock] = useState(product.stock);

  useEffect(() => {
    cartItems.map((item) => {
      const cartIndex = cartItems.findIndex((item) => item.id === product.id);
      if (cartIndex >= 0) {
        setStock(product.stock - item.quantity);
      }
    });
  }, [cartItems]);

  useEffect(() => {
    if (stock == 0) {
      setStockClass("out-of-stock");
    }
  }, [stock]);

  return (
    <div className={"product-card " + stockClass}>
      <Link to={"/item/" + product.id}>
        <img src={product.cover} alt="" />
      </Link>
      <div className="product-card-body">
        <p>
          {product.title} #{product.volume}
        </p>
        <p>${product.price}</p>
        <ItemCount stock={stock} product={product} onAdd={onAdd} initial="0" />
      </div>
    </div>
  );
};

export { ItemDetail };
