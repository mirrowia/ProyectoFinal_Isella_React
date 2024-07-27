import { useEffect} from "react";

function Input({ order, setOrder, stock }) {
  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    if (order > stock) {
      setOrder(stock);
    }
  }, [stock, order, setOrder]);

  return (
    <input
      id="itemQty"
      type="text"
      value={order}
      onChange={handleChange}
      readOnly="readonly"
    />
  );
}

export default Input;
