import ReactDOM from "react-dom";
import { useCallback, useEffect } from "react";
import svgIconX from "../../img/svg/x.svg";
import {
  CloseButton,
  ContentWrapper,
  StyledSvgUser,
  StyledWrapper,
} from "./Modal.styled";

const rootModal = document.querySelector("#modal");

const Modal = ({ children, closeModal }) => {
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
            <use href={`${svgIconX}`} />
          </StyledSvgUser>
        </CloseButton>
        <h1>fffffffffffff</h1>
        {children}
      </ContentWrapper>
    </StyledWrapper>,
    rootModal
  );
};
export default Modal;

// import { useModal } from 'components/hooks/useModal';
// const { isOpen, openModal, closeModal } = useModal();
// <div>
//   <button onClick={openModal}>open</button>
//   {isOpen ? <Modal closeModal={closeModal} /> : null}
// </div>;
