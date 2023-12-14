import styled from "styled-components";

export const StyledCarsList = styled.ul`
  padding-left: 0px;
  display: flex;
  gap: 50px 29px;
  flex-wrap: wrap;

  @media screen and (min-width: 425px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const StyledCarImgContainer = styled.li`
  position: relative;
  display: inline-block;
`;

export const StyledCarlInfoDiv = styled.div`
  width: 292px;
  margin-bottom: 28px;
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const StyledCarPriseDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  div {
    display: flex;
  }
`;
export const StyledCarTextTitle = styled.h3`
  max-height: 24px;
  color: var(--Text);
  font-weight: 500;
  line-height: 1.5;
  span {
    font-weight: 500;
    line-height: 24px;
    color: var(--accent-color);
  }
`;
export const StyledCarTextt = styled.p`
  color: rgba(18, 20, 23, 0.5);
  max-height: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const StyledCarImgt = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: fill;
  margin-bottom: 14px;
`;

export const StyledCarLike = styled.svg`
  position: absolute;
  top: 10px;
  right: 26px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: ${(props) => (props.$like ? "var(--accent-color)" : "transparent")};
  stroke: ${(props) => (props.$like ? "var(--accent-color)" : "var(--White)")};
`;

export const StyledCarLearnMore = styled.button`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  width: 100%;
  height: 44px;
  border-radius: 12px;
  border: none;
  color: var(--White);
  background: var(--accent-color);
  &:hover,
  &:focus {
    background: var(--accent-color-hover);
  }
`;
