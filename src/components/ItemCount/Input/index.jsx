function Input({ order, stock }) {
  const handleChange = (e) => {
    //setOrder(e.target.value);
  };

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
