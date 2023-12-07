import { Link, NavLink, useLocation } from "react-router-dom";

('import Logo from "../../img/Cars4RentLogo.img";');
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav>
        <Link to="/">Logo</Link>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog" state={{ from: location }}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" state={{ from: location }}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
