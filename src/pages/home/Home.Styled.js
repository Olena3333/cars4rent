import styled from "styled-components";
import img from "../../../public/car.jpg";

export const StyledSectionHero = styled.section`
  background-image: url(${img});
  background-size: cover;
  padding-top: 112px;
  padding-bottom: 112px;
`;
export const StyledHeroTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.11; /* 111.111% */
  letter-spacing: 0.72px;
  text-transform: capitalize;
  margin-bottom: 72px;
`;
