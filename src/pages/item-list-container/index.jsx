import "./index.css";
import Template from "../../Template";
import { ProductList } from "../../components/product-list";
import { useEffect, useState } from "react";
import { getMangas } from "../../services/firebase";
import { importMangas } from "../../services/firebase";

function ItemListContainer() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getMangas().then((data) => setList(data));
    //importMangas();
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
