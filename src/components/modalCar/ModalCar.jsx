import {
  StyledLogOutButton,
  StyledLogOutButtonWrapper,
  StyledLogOutText,
  StyledLogOutWrapper,
} from "./ModalCar.styled";

const ModalCar = () => {
  return (
    <StyledLogOutWrapper>
      <StyledLogOutText>Car</StyledLogOutText>
      <StyledLogOutButtonWrapper>
        <StyledLogOutButton>RentalCar</StyledLogOutButton>
      </StyledLogOutButtonWrapper>
    </StyledLogOutWrapper>
  );
};
export default ModalCar;
