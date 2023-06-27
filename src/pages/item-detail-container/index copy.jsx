import ItemCount from "../../components/Item/ItemCount";
import "./index.css";
import Template from "../../Template";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ItemDetailContainer(props) {
  const location = useLocation();
  const manga = location.state;

  useEffect(() => {}, []);

  return (
    <Template>
      <div
        id="ItemDetailContainer"
        className="container-fluid bg-warning-subtle"
      >
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
                <ItemCount stock={manga.stock} initial="0" />
                <p className="stock">Stock: {manga.stock}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}

export default ItemDetailContainer;
