import {
  StyledLogOutButton,
  StyledLogOutButtonWrapper,
  StyledLogOutText,
  StyledLogOutWrapper,
} from "./ModalCar.styled";

const ModalCar = ({ selectedCar }) => {
  return (
    <StyledLogOutWrapper>
      <StyledLogOutText>Car</StyledLogOutText>
      <StyledLogOutButtonWrapper>
        <StyledLogOutButton>{selectedCar}</StyledLogOutButton>
      </StyledLogOutButtonWrapper>
    </StyledLogOutWrapper>
  );
};
export default ModalCar;
