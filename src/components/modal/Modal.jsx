import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import sprite from "../../img/svg/sprite.svg";
import {
  CloseButton,
  ContentWrapper,
  StyledSvgUser,
  StyledWrapper,
} from "./Modal.styled";

const rootModal = document.querySelector("#modal");

const Modal = ({ closeModal, car }) => {
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

  return ReactDOM.createPortal(
    <StyledWrapper onClick={handleBackDrop}>
      <ContentWrapper>
        <CloseButton onClick={closeModal}>
          <StyledSvgUser width={24} height={24}>
            <use href={`${sprite}#icon-x`} />
            {/* <use href={`${svgIconX}`} /> */}
          </StyledSvgUser>
        </CloseButton>
        <h1>{car.id}</h1>
      </ContentWrapper>
    </StyledWrapper>,
    rootModal
  );
};
export default Modal;
