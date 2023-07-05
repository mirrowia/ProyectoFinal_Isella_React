import { useEffect, useState } from "react";

const CartTotal = (props) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(0);
    props.cartItems.map((item) => {
      setTotal(total + item.quantity * item.price);
      console.log(item.quantity * item.price);
      console.log(total);
    });
  }, [props]);

  return <></>;
};

export { CartTotal };
