import "./index.css";
import { useContext } from "react";
import Template from "../Template";
import { CartContext } from "../../context";
import { ItemList } from "../../components/CartList";
import { CartTotal } from "../../components/CartTotal";
import { Link } from "react-router-dom";
function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.items.length === 0)
    return (
      <Template>
        <div className="container-fluid cart-empty">
          <div className="cart-empty-box">
            <p>
              Vaya... No has seleccionado ningun producto del catalogo para
              agregar al carro.
            </p>
            <Link to="/">
              <p className="text-link">&gt;VOLVER AL CATÁLOGO&lt;</p>
            </Link>
          </div>
        </div>
      </Template>
    );

  return (
    <Template>
      <div id="CartContainer" className="container-fluid">
        <ItemList cartItems={cart.items} />
        <CartTotal cartItems={cart.items} />
      </div>
      <div className="container-fluid cart-items-confirm">
        <Link to="/checkout">
          <button>CONTINUAR</button>
        </Link>
      </div>
    </Template>
  );
}

export { Cart };
