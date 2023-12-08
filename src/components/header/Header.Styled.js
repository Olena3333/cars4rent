import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const StyledHederWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 20px;
  padding: 6px;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    margin: 10px 60px;
    padding: 20px;
    flex-wrap: nowrap;
    gap: 30px;
    justify-content: start;
    align-items: center;
  }
`;
export const StyledHeaderImg = styled.img`
  max-width: 60px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    max-width: 160px;
  }
`;
export const StyledHeaderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 6px;
  padding: 6px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;
export const StyledLink = styled(Link)`
  &:hover {
    transform: scale(1.07);
    text-shadow: 0 0 5px #0ef387;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  color: var(--Text);
  padding: 4px;
  border-radius: 6px;
  &.active {
    background-color: var(--accent-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 8px;
  }
`;
