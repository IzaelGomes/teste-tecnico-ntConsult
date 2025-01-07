import { Link } from "react-router-dom";
import "./header.css";
import { LogOut } from "lucide-react";

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
        <div className="header__infor">
          <div className="header__actions">
            <Link
              to="/dragons/create"
              className="header__action"
            >
              Criar Dragão
            </Link>
            <button className="header__button" onClick={handleLogout} aria-label="sair">
              <LogOut size={22}/>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
