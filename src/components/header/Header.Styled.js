import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const StyledHederWrapper = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: center;
`;
export const StyledHeaderList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const UserPanel = styled(Link)`
  text-decoration: none;
  color: rgba(250, 250, 250, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 12px;
  &:hover {
    transform: scale(1.07);
    text-shadow: 0 0 5px #0ef387;
  }
`;
