import "./index.css";
import ItemCount from "../../../components/NavBar/CartWidget/Item/ItemCount";
import { getManga } from "../../../services/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetail(props) {
  const [manga, setManga] = useState();
  const params = useParams();

  useEffect(() => {
    getManga(params.id).then((data) => setManga(data));
  }, []);

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
              <ItemCount stock={manga.stock} initial="0" />
              <p className="stock">Stock: {manga.stock}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
