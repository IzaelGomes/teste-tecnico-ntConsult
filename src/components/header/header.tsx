import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__link">Home</Link>
        <div className="header__actions">
          <Link to="/criar-dragao" className="header__link header__link--action">
            Criar Dragão
          </Link>
          <button className="header__button">Logout</button>
        </div>
      </nav>
    </header>
  );
};


