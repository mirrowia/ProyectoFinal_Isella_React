function Cart({ order, onAdd }) {
  if (order)
    return (
      <button className="btn">
        <i className="bi bi-cart-plus-fill" onClick={() => onAdd()} />
      </button>
    );

  return (
    <button className="btn disabled">
      <i className="bi bi-cart-plus-fill" />
    </button>
  );
}

export default Cart;
