import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { CartContext } from "../../context";
import { CheckoutInput } from "./CheckoutInput";
import { updateStock } from "../../services/firebase/mangas";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let tmp = 0;
    let tmpItems = 0;
    cart.items.forEach(item => {
      tmp += item.quantity * item.price;
      tmpItems += item.quantity;
    });
    setTotalItems(tmpItems);
    setTotal(tmp);
  }, [cart.items]);

  useEffect(() => {
    setCart(cart=>({
      ...cart,
      nombre: name
    }))
  }, [name, setCart]);

  useEffect(() => {
    setCart(cart=>({
      ...cart,
      apellido: lastName
    }))
  }, [lastName, setCart]);

  useEffect(() => {
    setCart(cart=>({
      ...cart,
      email: email
    }))
  }, [email, setCart]);

  useEffect(() => {
    setCart(cart => ({
      ...cart,
      telefono: phone
    }))
  }, [phone, setCart]);

  const confirmation = () => {
    if (
      cart.nombre !== "" &&
      cart.apellido !== "" &&
      cart.email !== "" &&
      cart.telefono !== ""
    ) {
      let timerInterval;
      Swal.fire({
        title: "Procesando datos del pedido",
        html: "Aguarde unos segundos porfavor ",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          //const b = Swal.getHtmlContainer().querySelector("b");
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          cart.items.forEach(item => {
            let newStock = item.stock - item.quantity;
            updateStock(item.id, newStock);
          });
          cart.items = [];
          setCart(cart);
          localStorage.setItem("cart", []);
          Swal.fire(
            "Pedido procesado",
            "Se le envio un correo con los detalles para realizar el pago",
            "success"
          ).then(function () {
            navigate("/"); 
          });
        }
      });
    } else {
      Swal.fire(
        "Formulario incompleto",
        "Favor de verificar que todos los campos contengan datos",
        "error"
      );
    }
  };

  return (
    <div className="input-group-container">
      <CheckoutInput
        inputName="Nombre"
        inputId="name"
        inputType="text"
        setValue={setName}
      />
      <CheckoutInput
        inputName="Apellido"
        inputId="lastName"
        inputType="text"
        setValue={setLastName}
      />
      <CheckoutInput
        inputName="Email"
        inputId="email"
        inputType="email"
        setValue={setEmail}
      />
      <CheckoutInput
        inputName="Telefono"
        inputId="phone"
        inputType="tel"
        setValue={setPhone}
      />
      <div className="checkout-products">
        <div>
          <p> Total de productos: {totalItems}</p>
          <p> Precio total: ${total}</p>
        </div>
        <div className="button">
          <p onClick={() => confirmation()}>Continuar</p>
        </div>
      </div>
    </div>
  );
};

export { CheckoutForm };
