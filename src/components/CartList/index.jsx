import "./index.css";
import { Link } from "react-router-dom";

const ItemList = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className={"cart-product"}>
            <Link to={"/item/" + item.id}>
              <img src={item.cover} alt="cover" />
            </Link>
            <div className="product-card-body">
              <p className="product-card-body-title">
                {item.title} #{item.volume}
              </p>
            </div>
            <div className="product-card-quantity">
              <p>{item.quantity}</p>
              <i className="bi bi-trash-fill" />
            </div>
            <div className="product-card-price">
              <p className="product-card-body-price">${item.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { ItemList };
