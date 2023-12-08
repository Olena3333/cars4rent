import styled from "styled-components";
import img from "../../../public/car.jpg";
import imgroad from "../../../public/road.jpg";
import svgIcon from "../../img/svg/pinboard.svg";

export const StyledSectionHero = styled.section`
  background-image: url(${img});
  background-size: cover;
  padding-top: 112px;
  padding-bottom: 112px;
`;
export const StyledHeroTitle = styled.h1`
  color: var(--White);
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.11; /* 111.111% */
  letter-spacing: 0.72px;
  margin-bottom: 72px;
`;
export const StyledRentalCarBtn = styled.button`
  display: block;
  border: none;
  padding: 12px 50px;
  min-width: 168px;
  border-radius: 12px;
  margin: 0 auto;
  color: var(--White);
  background-color: var(--accent-color);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  transition-property: background-color;
  transition-duration: var(--titing-duration);
  transition-timing-function: var(--timing-function);
  &:hover,
  &:focus {
    background-color: var(--accent-color-hover);
  }
`;
export const StyledSectionAdvantages = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
`;
export const StyledAdvantagesTitle = styled.h2`
  color: var(--Text);
  margin-bottom: 32px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.11; /* 111.111% */
  letter-spacing: 0.72px;
`;
export const StyledAdvantagesList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const StyledAdvantagesListItem = styled.li`
  display: flex;
  gap: 36px;
  p {
    font-size: 26px;
  }
  &:before {
    content: url(${svgIcon});
    stroke: var(--accent-color);
  }
`;
export const StyledAdvantagesIcon = styled.svg`
  fill: var(--accent-color);
`;

export const StyledSectionForYou = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
`;
export const StyledForYouList = styled.ul`
  color: var(--White);
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  background-image: url(${imgroad});
  background-size: cover;
  gap: 40px;
  max-width: 375px;
  padding: 20px 20px;
  margin: 10px 20px;
  @media screen and (min-width: 425px) {
    margin: 40px;
    padding: 100px 40px;
    display: grid;
    flex-wrap: nowrap;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    flex-direction: column;
    align-items: start;
    max-width: 1440px;
  }
`;
export const StyledForYouListItem = styled.li`
  h3 {
    margin-bottom: 32px;
    margin-top: 32px;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.11;
    letter-spacing: 0.72px;
    @media screen and (min-width: 425px) {
      font-size: 36px;
    }
  }
`;
export const StyledForYouIcon = styled.svg`
  fill: var(--White);
  margin: 0 auto;
`;
