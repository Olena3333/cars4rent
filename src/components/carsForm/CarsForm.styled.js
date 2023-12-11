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
  max-width: 860px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledInputDiv = styled.div`
  display: flex;
  column-gap: 2px;
`;

export const StyledInput = styled.input`
  max-width: 160px;
  padding: 14px 75px 14px 24px;
  height: 64px;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
`;
export const StyledLabel = styled.label`
  color: #8a8a89;
  font-family: Manrope;
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
  transition: background 0.3s ease;
  &:hover {
    background: #0b44cd;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
`;
