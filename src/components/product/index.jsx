import "./index.css";
import ItemCount from "../Item/ItemCount";
import { Link } from "react-router-dom";

const Product = (product) => {
  return (
    <div className="product-card">
      <Link to={"/item/" + product.id} state={product}>
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

export { Product };
