import { useEffect} from "react";

function Input({ name, order, setOrder, stock }) {
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
    name={name}
    type="text"
    value={order}
    onChange={handleChange}
    />
  );
}

export default Input;
