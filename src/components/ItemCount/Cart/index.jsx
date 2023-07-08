function Cart({ order, onAdd }) {
  if (order)
    return (
      <button className="btn" onClick={() => onAdd()}>
        <i className="bi bi-cart-plus-fill" />
      </button>
    );

  return (
    <button className="btn disabled">
      <i className="bi bi-cart-plus-fill" />
    </button>
  );
}

export default Cart;
