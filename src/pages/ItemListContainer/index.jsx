import "./index.css";
import Template from "../Template";
import { ItemList } from "../../components/ItemList";
import { useEffect, useState } from "react";
import { getMangas } from "../../services/firebase";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [list, setList] = useState();
  const params = useParams();

  useEffect(() => {
    getMangas(params.category).then((data) => setList(data));
  }, [params.category]);

  if (!list) return null;

  return (
    <Template>
      <div id="ItemListContainer" className="container-fluid">
        <ItemList mangas={list} />
      </div>
    </Template>
  );
}

export default ItemListContainer;
