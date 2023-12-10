import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import sprite from "../../img/svg/sprite.svg";
import {
  AccessoriesContainer,
  AccessoriesSpan,
  AccessoriesTitle,
  CarDescription,
  CarDetails,
  CarDivMainInfo,
  CarImage,
  CarImgContainer,
  CarLi,
  CarProperty,
  CloseButton,
  ContentWrapper,
  ModalContainer,
  RentalConditionItem,
  RentalConditionsDetails,
  RentalConditionsDiv,
  RentalConditionsList,
  RentalConditionsTitle,
  StyledRentalCarBtn,
  StyledSvgUser,
  StyledWrapper,
} from "./Modal.styled";

const rootModal = document.querySelector("#modal");

const Modal = ({ closeModal, car, index }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal, handleKeyDown]);

  const handleBackDrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      closeModal();
    }
  };

  const formatMileage = (mileage) => {
    const numberString = mileage.toString();
    const formattedMileage = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedMileage;
  };

  const highlightRentalConditions = (text) => {
    const conditionsRegex = /(\s*\d+)/g;
    const parts = text.split(conditionsRegex);

    const highlightedElements = parts.map((part, index) =>
      conditionsRegex.test(part) ? (
        <span
          key={index}
          style={{
            color: "#3470ff",
            fontWeight: "600",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );

    return <>{highlightedElements}</>;
  };

  return ReactDOM.createPortal(
    <StyledWrapper onClick={handleBackDrop}>
      <ContentWrapper>
        <CloseButton onClick={closeModal}>
          <StyledSvgUser width={24} height={24}>
            <use href={`${sprite}#icon-x`} />
          </StyledSvgUser>
        </CloseButton>

        <ModalContainer>
          <CarLi key={`${car?.id}-${index}`}>
            <CarImgContainer>
              {car && <CarImage src={car?.img} alt={car?.make} />}
            </CarImgContainer>
            <CarDivMainInfo>
              <p>
                {car?.make} <span> {car?.model}</span>, {car?.year}
              </p>
            </CarDivMainInfo>
            <CarDetails>
              <CarProperty>
                {car?.address.split(" ")[car?.address.split(" ").length - 2]}
              </CarProperty>
              <CarProperty>
                {car?.address.split(" ")[car?.address.split(" ").length - 1]}
              </CarProperty>
              <CarProperty>id: {car?.id}</CarProperty>
              <CarProperty>Year: {car?.year}</CarProperty>
              <CarProperty>Type: {car?.type}</CarProperty>
              <CarProperty>
                Fuel consumption: {car?.fuelConsumption}
              </CarProperty>
              <CarProperty>Engine size: {car?.engineSize}</CarProperty>
            </CarDetails>
            <CarDescription>{car?.description}</CarDescription>
            <AccessoriesContainer>
              <AccessoriesTitle>
                Accessories and functionalities:
              </AccessoriesTitle>
              <AccessoriesSpan>{car?.accessories.join(" | ")}</AccessoriesSpan>
              <AccessoriesSpan>
                {car?.functionalities.join(" | ")}
              </AccessoriesSpan>
            </AccessoriesContainer>
            <div>
              <RentalConditionsList>
                <RentalConditionsTitle>
                  Rental conditions:
                </RentalConditionsTitle>
                <RentalConditionsDiv>
                  {car?.rentalConditions.split("\n").map((condition, index) => (
                    <RentalConditionItem key={index}>
                      {highlightRentalConditions(condition)}
                    </RentalConditionItem>
                  ))}
                </RentalConditionsDiv>
                <RentalConditionsDetails>
                  <RentalConditionItem>
                    Price:{" "}
                    <span>{car?.rentalPrice.replace("$", "") + "$"}</span>
                  </RentalConditionItem>
                  <RentalConditionItem>
                    Mileage: <span>{formatMileage(car?.mileage)}</span>
                  </RentalConditionItem>
                </RentalConditionsDetails>
              </RentalConditionsList>
            </div>
            <a href="tel:+380730000000">
              <StyledRentalCarBtn type="button">Rental car</StyledRentalCarBtn>
            </a>
          </CarLi>
        </ModalContainer>
      </ContentWrapper>
    </StyledWrapper>,
    rootModal
  );
};
export default Modal;
