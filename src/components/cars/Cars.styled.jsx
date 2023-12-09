import styled from "styled-components";

export const StyledCarsList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (min-width: 425px) {
    padding: 100px 40px;
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    flex-direction: column;
    align-items: start;
  }
`;
export const CarImgContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledCarImgt = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: fill;
  margin-bottom: 14px;
`;

export const Like = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  fill: ${(props) => (props.$like ? "#3470ff" : "transparent")};
  stroke: ${(props) => (props.$like ? "#3470ff" : "white")};
`;
