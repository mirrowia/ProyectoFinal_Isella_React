import Search from "./Search";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const categories = [
    ["ACCION", "ACCION"],
    ["AVENTURAS", "AVENTURAS"],
    ["CIENCIA FICCION", "CIENCIA-FICCION"],
    ["COMICS NORTEAMERICANOS", "COMICS-NORTEAMERICANOS"],
    ["DEPORTES", "DEPORTES"],
    ["SUSPENSO", "SUSPENSO"],
  ];
  return (
    <nav id="NavBar" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div id="title">
          <NavLink to="/">MirrowIA</NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="container-fluid navbar-nav d-flex justify-content-between">
            <div className="d-flex">
              <NavLink to="/" state="">
                Inicio
              </NavLink>
              <div className="dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </button>
                <ul className="dropdown-menu nav-list">
                  {categories.map((category) => {
                    return (
                      <li key={category}>
                        <NavLink
                          to={"/category/" + category[1]}
                          state={category[0]}
                        >
                          <button className="dropdown-item my-2" type="button">
                            {category[0]}
                          </button>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Search />
            </div>
            <div className="d-flex nav-cart">
              <Link to={"/cart"}>
                <CartWidget />
              </Link>
              <div>
                <a className="navbar-brand ms-3" href="">
                  Usuario
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
