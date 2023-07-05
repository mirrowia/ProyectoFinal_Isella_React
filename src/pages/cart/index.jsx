import "./index.css";
import { useContext } from "react";
import Template from "../Template";
import { CartContext } from "../../context";
import { ItemList } from "../../components/CartList";
import { CartTotal } from "../../components/CartTotal";
function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <Template>
      <div id="CartContainer" className="container-fluid bg-warning-subtle">
        <ItemList cartItems={cartItems} />
        <CartTotal cartItems={cartItems} />
      </div>
    </Template>
  );
}

export { Cart };
