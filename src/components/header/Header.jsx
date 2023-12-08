import { useLocation } from "react-router-dom";

import img from "../../../public/Cars-For-Rent-Logo.jpg";
import {
  StyledHeaderImg,
  StyledHeaderList,
  StyledHederWrapper,
  StyledLink,
  StyledNavLink,
} from "./Header.Styled";
import { StyledContainer } from "../../helpers/Container.styled";
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <StyledContainer>
        <StyledHederWrapper>
          <StyledLink to="/">
            <StyledHeaderImg src={img} alt="logo" />
          </StyledLink>
          <StyledHeaderList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/catalog" state={{ from: location }}>
                Catalog
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/favorites" state={{ from: location }}>
                Favorites
              </StyledNavLink>
            </li>
          </StyledHeaderList>
        </StyledHederWrapper>
      </StyledContainer>
    </header>
  );
};

export default Header;
