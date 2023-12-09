import {
  StyledLogOutButton,
  StyledLogOutButtonWrapper,
  StyledLogOutText,
  StyledLogOutWrapper,
} from "./LogOutModal.Styled";

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
