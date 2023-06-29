import "./index.css";
import ItemCount from "../NavBar/CartWidget/Item/ItemCount";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetail = (product) => {
  const [stockClass, setStockClass] = useState("");

  useEffect(() => {
    if (product.stock == 0) {
      setStockClass("out-of-stock");
    }
  }, [product.stock]);

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
        <ItemCount stock={product.stock} initial="0" />
      </div>
    </div>
  );
};

export { ItemDetail };
