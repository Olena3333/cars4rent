import styled from "styled-components";

export const StyledCarsList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (min-width: 425px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-direction: column;
    align-items: start;
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

export const StyledCarTextt = styled.p`
  color: rgba(18, 20, 23, 0.5);
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
  width: 274px;
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
  fill: var(--accent-color);
  stroke: var(--accent-color);
`;
/* 
  fill: ${(props) => (props.$like ? "var(--accent-color)" : "transparent")};
  stroke: ${(props) => (props.$like ? "var(--accent-color)" : "var(--White)")};
`; */
export const StyledCarLearnMore = styled.button`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  width: 274px;
  height: 44px;
  border-radius: 12px;
  border: none;
  color: var(--White);
  background: var(--accent-color);
  /* position: absolute;
  bottom: 0; */
`;
