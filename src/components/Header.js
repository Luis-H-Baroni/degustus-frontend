import { Link, useLocation } from "react-router-dom";

//navbar
function Header() {
  const location = useLocation();

  const getCurrentPage = () => {
    switch (location.pathname) {
      case "/":
      default:
        return "Home";
      case "/cardapio":
        return "Cardápio";
      case "/funcionarios":
        return "Funcionários";
      case "/empresas":
        return "Empresas";
    }
  };

  return (
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Degustus</span>
          <span className="navbar-brand mb-0 h1">{getCurrentPage()}</span>

          <form className="d-flex">
            <Link to="/comandas">
              <button className="btn btn-outline-secondary me-2">
                Comanda
              </button>
            </Link>
            <Link to="/ordens">
              <button className="btn btn-outline-secondary me-5">Ordem</button>
            </Link>
            <Link to="/">
              <button className="btn btn-outline-secondary me-2">Home</button>
            </Link>
            <Link to="/cardapio">
              <button className="btn btn-outline-secondary me-2">
                Cardápio
              </button>
            </Link>
            <Link to="/funcionarios">
              <button className="btn btn-outline-secondary me-2">
                Funcionários
              </button>
            </Link>
            <Link to="/empresas">
              <button className="btn btn-outline-secondary me-2">
                Empresas
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
