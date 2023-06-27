import "./index.css";
import ItemCount from "../Item/ItemCount";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Product(props) {
  useEffect(() => {}, []);

  if (props.product.stock == 0) {
    return (
      <>
        <div className="product-card card-dissabled">
          <Link to={"/item/" + props.product.id} state={props.product}>
            <img className="out-of-stock" src={props.product.cover} alt="" />
          </Link>
          <div className="product-card-body">
            <p>
              {props.product.title} #{props.product.volume}
            </p>
            <p>${props.product.price}</p>
            <ItemCount stock={props.product.stock} initial="0" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="product-card">
        <Link to={"/item/" + props.product.id} state={props.product}>
          <img src={props.product.cover} alt="" />
        </Link>
        <div className="product-card-body">
          <p>
            {props.product.title} #{props.product.volume}
          </p>
          <p>${props.product.price}</p>
          <ItemCount stock={props.product.stock} initial="0" />
        </div>
      </div>
    </>
  );
}

export default Product;
