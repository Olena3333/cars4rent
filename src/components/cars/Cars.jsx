import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../hooks/useModal";
import { removeFromFavorites, setFavorites } from "../../redux/sliceFavorits";
import {
  selectCars,
  selectFavorites,
  selectLoading,
  selectAllCars,
} from "../../redux/selectors";

import sprite from "../../img/svg/sprite.svg";
import LoadMore from "../loadMore/LoadMore";
import Modal from "../modal/Modal";
import Loader from "../loading/Loader";

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
import { fetchAllCarsThunk } from "../../redux/operations";

const Cars = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const { isOpen, openModal, closeModal } = useModal();

  const allCar = useSelector(selectAllCars);

  const [like, setLike] = useState(null);
  const favorites = useSelector(selectFavorites);
  const toggleFavoritesHandler = (car, index) => {
    const isFavorite = favorites.some(
      (favoriteCar) => favoriteCar.id === car.id
    );
    if (isFavorite) {
      dispatch(removeFromFavorites(car));
      toast.info(`${car.make} ${car.model} removed from favorites`);
      setLike(null);
    } else {
      dispatch(setFavorites(car));
      toast.info(`${car.make} ${car.model} add to favorites`);
      setLike(index);
    }
  };
  // useEffect(() => {
  //   dispatch(fetchAllCarsThunk());
  // }, []);
  // console.log(allCar);
  return (
    <section>
      <StyledContainer>
        <StyledCarsList>
          {cars?.map((car, index) => {
            const isFavorite = favorites.some((favCar) => favCar.id === car.id);
            return (
              <StyledCarImgContainer key={index}>
                {isLoading ? (
                  <Loader />
                ) : (
                  <StyledCarImgt src={car.img} alt={car.make} height="268px" />
                )}
                <StyledCarLike
                  width="24"
                  height="24"
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
                <StyledCarLearnMore onClick={() => openModal(car, index)}>
                  Learn more
                </StyledCarLearnMore>
                {isOpen ? (
                  <Modal closeModal={closeModal} car={car} index={index} />
                ) : null}
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
