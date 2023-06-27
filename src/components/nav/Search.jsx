import "./Search.css";

function Search() {
  return (
    <div id="search-div" className="d-flex flex-row">
      <div className="input-group">
        <input
          type="text"
          id="search-box"
          className="form-control"
          placeholder="Buscar"
          aria-label="Buscar"
          aria-describedby="basic-addon1"
        />
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-search" />
        </span>
      </div>
    </div>
  );
}

export default Search;
