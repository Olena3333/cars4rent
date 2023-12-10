import styled from "styled-components";

export const StyledLoadMoreButton = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--accent-color);
  text-decoration-line: underline;
  &:hover,
  &:focus {
    color: var(--accent-color-hover);
`;

export const StyledLoadMoreContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
