import "./index.css";
import Template from "../../Template";
import { ProductList } from "../../components/product-list";
import { useEffect, useState } from "react";

function ItemListContainer() {
  const [list, setList] = useState([]);

  const getList = () => {
    fetch("../../sources/novedades.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setList(myJson);
      });
  };

  useEffect(() => {
    getList();
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
