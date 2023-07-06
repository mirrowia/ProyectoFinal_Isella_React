import "./index.css";
import ItemCount from "../../../components/ItemCount";
import { getManga } from "../../../services/firebase";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../../context";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const [manga, setManga] = useState();
  const { onAdd, cartItems } = useContext(CartContext);
  const [stock, setStock] = useState(0);
  const params = useParams();

  useEffect(() => {
    getManga(params.id).then((data) => setManga(data));
  }, []);

  useEffect(() => {
    if (manga) {
      setStock(manga.stock);
      const cartIndex = cartItems.findIndex((item) => item.id === manga.id);
      if (cartIndex >= 0) {
        setStock(manga.stock - cartItems[cartIndex].quantity);
      }
    }
  }, [manga, cartItems]);

  if (!manga) return null;

  return (
    <div id="ItemDetailContainer" className="container-fluid bg-warning-subtle">
      <div className="d-flex justify-content-evenly pt-5">
        <div className="item-detail-cover">
          <img src={manga.cover} alt={manga.title + " PORTADA"} />
        </div>
        <div className="item-detail-info">
          <h1>{manga.title}</h1>
          <p>{manga.description}</p>

          <div className="item-detail-info-buy">
            <p className="item-detail-info-price">Valor: ${manga.price}</p>
            <div className="d-flex">
              <ItemCount
                stock={stock}
                product={manga}
                onAdd={onAdd}
                initial="0"
              />
              <p className="stock">Stock: {stock}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
