import "./index.css";
import Template from "../../Template";
import { ProductList } from "../../components/product-list";
import { useEffect, useState } from "react";
import { getMangas } from "../../services/mangas";

function ItemListContainer() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getMangas().then((data) => setList(data));
  }, []);

  if (list.length === 0) return null;

  return (
    <Template>
      <div id="ItemListContainer" className="container-fluid bg-warning-subtle">
        <ProductList products={list} />
      </div>
    </Template>
  );
}

export default ItemListContainer;
