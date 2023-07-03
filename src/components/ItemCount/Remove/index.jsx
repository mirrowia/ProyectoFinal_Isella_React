function Remove({ remove, order, stock }) {
  if (order == 0) {
    return <i className="bi bi-dash setGreyed" />;
  }

  return <i className="bi bi-dash" onClick={() => remove()} />;
}
export default Remove;
