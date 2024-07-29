import "./index.css";
import Template from "../Template";
import { ItemList } from "../../components/ItemList";
import { useEffect, useState } from "react";
import { getMangas } from "../../services/firebase";
import { useLocation, useParams } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ItemListContainer() {
  const [list, setList] = useState([]);
  const params = useParams();
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    getMangas(params.category, search).then((data) => setList(data));
  }, [params.category, search]);

  return (
    <Template>
      <div id="ItemListContainer" className="container-fluid">
        <ItemList mangas={list} />
      </div>
    </Template>
  );
}

export default ItemListContainer;
