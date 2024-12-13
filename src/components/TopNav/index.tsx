import { Link, NavLink } from "react-router-dom";
import "./topNav.scss";

export default function TopNav() {
  const userId = 12;
  return (
    <header className="header">
      <Link to="/">
        <img
          src="/src/assets/logo.svg"
          className="header__logo"
          alt="Vite logo"
        />
      </Link>

      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to={`/user/${userId}`}>Profil</NavLink>
        <NavLink to="/settings">Réglage</NavLink>
        <NavLink to="/community">Communauté</NavLink>
      </nav>
    </header>
  );
}
