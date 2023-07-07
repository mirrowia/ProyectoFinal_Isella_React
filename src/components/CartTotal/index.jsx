import { useEffect, useState } from "react";

const CartTotal = ({ cartItems }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.quantity * item.price;
    });
    setTotal(sum);
  }, [cartItems]);

  return (
    <>
      <div className="cart-total">
        <p className="cart-total-text">TOTAL </p>
        <p className="cart-total-amount">${total}</p>
      </div>
    </>
  );
};

export { CartTotal };
