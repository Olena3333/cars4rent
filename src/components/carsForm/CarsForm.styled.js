import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;

export const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 18px;
  justify-content: space-between;
  max-width: 960px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledInputDiv = styled.div`
  display: flex;
  gap: 6px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const StyledInput = styled.input`
  width: 160px;
  padding: 14px 75px 14px 24px;
  height: 64px;
  font-size: 18px;
  line-height: 1.13;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  margin: 20px;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;
export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const StyledSearchButton = styled.button`
  height: 50px;
  width: 135px;
  place-self: flex-end;
  border-radius: 12px;
  padding: 0;
  background: #3470ff;
  border: none;
  color: white;
  background: var(--accent-color);
  &:hover,
  &:focus {
    background: var(--accent-color-hover);
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
`;
