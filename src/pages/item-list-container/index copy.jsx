import "./index.css";
import Template from "../../Template";
import Product from "../../components/Product";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ItemListContainer(props) {
  const [list, setList] = useState([]);
  const [cartItems, setCartItems] = useState([
    localStorage.getItem("cartItems"),
  ]);
  const location = useLocation();
  const category = location.state;

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

  useEffect(() => {}, [category]);

  if (!list) return null;

  return (
    <Template>
      <div id="ItemListContainer" className="container-fluid bg-warning-subtle">
        {list.map((manga) => {
          if (category == null) {
            return (
              <div key={manga.id}>
                <Product product={manga} />
              </div>
            );
          } else {
            if (category == manga.category) {
              return (
                <div key={manga.id}>
                  <Product product={manga} />
                </div>
              );
            }
          }
        })}
      </div>
    </Template>
  );
}

export default ItemListContainer;
