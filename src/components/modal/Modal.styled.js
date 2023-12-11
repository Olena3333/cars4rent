import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--Text-halb);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ContentWrapper = styled.div`
  position: relative;
  background-color: var(--White);
  border: 1px solid var(--Text-halb);
  padding: 37px;
  overflow: hidden;
  border-radius: 30px;
  width: 541px;
  height: 752px;
  @media (max-width: 767px) {
    width: 335px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  z-index: 1200;
`;

export const StyledSvgUser = styled.svg`
  stroke: var(--Text);
  &:hover,
  &:focus {
    stroke: var(--Text-halb);
    transition: background-color 500ms ease-in-out;
    transform: scale(1.2);
  }
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
export const ModalContainer = styled.ul`
  display: flex;
`;
export const CarImage = styled.img`
  object-fit: cover;
  width: 469px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const SpanModal = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  color: #3470ff;
`;
export const CarDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 360px;
  margin-bottom: 14px;
`;
export const CarProperty = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 4px;

  &::before {
    content: "\u00a0";
  }

  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const CarDescription = styled.p`
  color: rgba(18, 20, 23, 0.5);

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  margin-bottom: 24px;

  font-family: Manrope;
  font-size: 14px;
  line-height: 20px;
  color: #121417;

  &:not(:last-child) {
    border-right: none;
  }
`;
export const AccessoriesContainer = styled.div`
  width: 340px;
  margin-bottom: 24px;
`;

export const AccessoriesTitle = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const AccessoriesSpan = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
`;
export const RentalConditionsList = styled.ul`
  padding-left: 0px;
`;

export const RentalConditionsTitle = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const RentalConditionsDiv = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 0px;
  margin-bottom: 8px;
`;
export const RentalConditionItem = styled.li`
  padding: 7px 14px;
  gap: 8px;
  border-radius: 35px;

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: #363535;
  background: #f9f9f9;

  span {
    color: #3470ff !important;
  }
`;

export const RentalConditionsDetails = styled.div`
  /* display: flex;
  gap: 8px;
  margin-bottom: 24px; */
`;
export const CarImgContainer = styled.div`
  /* position: relative;
  display: inline-block; */
`;
export const CarDivMainInfo = styled.div`
  /* width: 270px;
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between; */
`;
export const CarLi = styled.li`
  list-style: none;
`;
