import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFavorites } from "../../redux/selectors";

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
} from "./Cars.styled";
import { StyledContainer } from "../../helpers/Container.styled";

import sprite from "../../img/svg/sprite.svg";
import LoadMore from "../loadMore/LoadMore";
import Modal from "../modal/Modal";
import { useModal } from "../hooks/useModal";

import { removeFromFavorites, setFavorites } from "../../redux/sliceFavorits";

const Cars = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  const { isOpen, openModal, closeModal } = useModal();

  const [like, setLike] = useState(null);
  const favorites = useSelector(selectFavorites);
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

  return (
    <section>
      <StyledContainer>
        <StyledCarsList>
          {cars?.map((car, index) => {
            const isFavorite = favorites.some((favCar) => favCar.id === car.id);
            return (
              <StyledCarImgContainer key={index}>
                <StyledCarImgt src={car.img} alt={car.make} height="268px" />
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
                    <StyledCarTextTitle>{car.make}</StyledCarTextTitle>
                    <StyledCarTextTitle>
                      <span> {car.model}</span>,
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
                <StyledCarLearnMore onClick={() => openModal(car)}>
                  Learn more
                </StyledCarLearnMore>
                {isOpen ? <Modal closeModal={closeModal} car={car} /> : null}
              </StyledCarImgContainer>
            );
          })}
        </StyledCarsList>
        <LoadMore />
      </StyledContainer>
    </section>
  );
};
export default Cars;
