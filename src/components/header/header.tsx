import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const handleLogout = () => {
    window.location.href = "/";
    localStorage.clear();
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/dragons" className="header__link">
          Home
        </Link>
        <div className="header__actions">
          <Link
            to="/dragons/create"
            className="header__link header__link--action"
          >
            Criar Dragão
          </Link>
          <button className="header__button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};
