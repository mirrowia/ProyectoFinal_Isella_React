import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/?search=${query}`);
  };

  return (
    <div id="search-div" className="d-flex flex-row">
      <form onSubmit={handleSearch} className="input-group">
        <input
          type="text"
          id="search-box"
          className="form-control"
          placeholder="Buscar"
          aria-label="Buscar"
          aria-describedby="basic-addon1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="input-group-text" id="basic-addon1">
          <i className="bi bi-search" />
        </button>
      </form>
    </div>
  );
}

export default Search;
