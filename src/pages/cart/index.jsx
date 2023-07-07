import "./index.css";
import { useContext } from "react";
import Template from "../Template";
import { CartContext } from "../../context";
import { ItemList } from "../../components/CartList";
import { CartTotal } from "../../components/CartTotal";
function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  if (cartItems.length == 0) return <Template>VOLVER AL CATÁLOGO</Template>;

  return (
    <Template>
      <div id="CartContainer" className="container-fluid">
        <ItemList cartItems={cartItems} />
        <CartTotal cartItems={cartItems} />
      </div>
      <div className="container-fluid cart-items-confirm">
        <button>CONTINUAR</button>
      </div>
    </Template>
  );
}

export { Cart };
