import { Link } from "react-router-dom";
import "./header.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { User } from 'lucide-react'

export const Header = () => {
  const { username } = useAuthContext();

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
          <div className="header_user">
          <User className="header_user_icon" size={19}/>
          <span className="header_user_name">{username}</span>
          </div>
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
        </div>
      </nav>
    </header>
  );
};
