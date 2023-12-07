import { Link, NavLink, useLocation } from "react-router-dom";

import img from "../../../public/Cars-For-Rent-Logo.jpg";
import { StyledHeaderList, StyledHederWrapper } from "./Header.Styled";
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <StyledHederWrapper>
        <Link to="/">
          <img src={img} alt="logo" />
        </Link>
        <StyledHeaderList>
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
        </StyledHeaderList>
      </StyledHederWrapper>
    </header>
  );
};

export default Header;
