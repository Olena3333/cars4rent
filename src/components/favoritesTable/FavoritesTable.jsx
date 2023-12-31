import { useDispatch, useSelector } from "react-redux";
import { selectFavorites, selectLoading } from "../../redux/selectors";
import { StyledContainer } from "../../helpers/Container.styled";
import {
  StyledCarImgContainer,
  StyledCarImgt,
  StyledCarLearnMore,
  StyledCarLike,
  StyledCarPriseDiv,
  StyledCarTextTitle,
  StyledCarTextt,
  StyledCarlInfoDiv,
  StyledCarsList,
  StyledFavoritText,
} from "./FavoritesTable.styled";

import { useState } from "react";
import { removeFromFavorites, setFavorites } from "../../redux/sliceFavorits";
import sprite from "../../img/svg/sprite.svg";
import { toast } from "react-toastify";
import { useModal } from "../hooks/useModal";
import Modal from "../modal/Modal";
import Loader from "../loading/Loader";

const FavoritesTable = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const { isOpen, openModal, closeModal } = useModal();
  const isLoading = useSelector(selectLoading);
  const [like, setLike] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModalCar = (car, index) => {
    setSelectedCar({ car, index });
    openModal();
  };

  const toggleFavoritesHandler = (car, index) => {
    const isFavorite = favorites.some(
      (favoriteCar) => favoriteCar.id === car.id
    );

    if (isFavorite) {
      dispatch(removeFromFavorites(car));
      setLike(null);
    } else {
      dispatch(setFavorites(car));
      setLike(index);
    }
  };
  if (!favorites.length) {
    toast.info("Add cars to favorites!");
    return <StyledFavoritText>You do not have favorites</StyledFavoritText>;
  }

  return (
    <section>
      <StyledContainer>
        <StyledCarsList>
          {favorites?.map((car, index) => {
            const isFavorite = favorites.some((favCar) => favCar.id === car.id);
            return (
              <StyledCarImgContainer key={index}>
                {isLoading ? (
                  <Loader />
                ) : (
                  <StyledCarImgt src={car.img} alt={car.make} height="268px" />
                )}
                <StyledCarLike
                  width="18"
                  height="18"
                  $like={isFavorite || like === index}
                  onClick={() => toggleFavoritesHandler(car, index)}
                >
                  <use href={`${sprite}#icon-normal`} />
                </StyledCarLike>
                <StyledCarPriseDiv>
                  <div>
                    <StyledCarTextTitle>{car.make}&nbsp;</StyledCarTextTitle>
                    <StyledCarTextTitle>
                      <span> {car.model}</span>,&nbsp;
                    </StyledCarTextTitle>
                    <StyledCarTextTitle>{car.year}</StyledCarTextTitle>
                  </div>
                  <StyledCarTextTitle>{car.rentalPrice}</StyledCarTextTitle>
                </StyledCarPriseDiv>
                <StyledCarlInfoDiv>
                  <StyledCarTextt>
                    {car.address.split(" ")[
                      // eslint-disable-next-line no-unexpected-multiline
                      car.address.split(" ").length - 2
                    ].slice(0, -1)}
                  </StyledCarTextt>
                  <StyledCarTextt>
                    {car.address.split(" ")[car.address.split(" ").length - 1]}
                  </StyledCarTextt>
                  <StyledCarTextt>{car.rentalCompany}</StyledCarTextt>
                  <StyledCarTextt>{car.type}</StyledCarTextt>
                  <StyledCarTextt>{car.make}</StyledCarTextt>
                  <StyledCarTextt>{car.mileage}</StyledCarTextt>
                  <StyledCarTextt>{car.accessories[0]}</StyledCarTextt>
                </StyledCarlInfoDiv>
                <StyledCarLearnMore onClick={() => openModalCar(car, index)}>
                  Learn more
                </StyledCarLearnMore>
                {isOpen && selectedCar && selectedCar.index === index ? (
                  <Modal closeModal={closeModal} car={car} index={index} />
                ) : null}
              </StyledCarImgContainer>
            );
          })}
        </StyledCarsList>
      </StyledContainer>
    </section>
  );
};
export default FavoritesTable;
