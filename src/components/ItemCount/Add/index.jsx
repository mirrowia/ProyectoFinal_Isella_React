function Add({ add, order, stock }) {
  if (order == stock) {
    return <i className="bi bi-plus setGreyed" />;
  }

  return <i className="bi bi-plus" onClick={() => add()} />;
}

export default Add;
