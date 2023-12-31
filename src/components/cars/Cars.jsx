import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../hooks/useModal";
import { removeFromFavorites, setFavorites } from "../../redux/sliceFavorits";
import {
  selectCars,
  selectFavorites,
  selectLoading,
  selectedMileageFrom,
  selectedMileageTo,
  selectedPrice,
  selectsFilteredMake,
} from "../../redux/selectors";
import { StyledContainer } from "../../helpers/Container.styled";

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

const Cars = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const { isOpen, openModal, closeModal } = useModal();
  const [like, setLike] = useState(null);
  const favorites = useSelector(selectFavorites);
  const carsPrice = useSelector(selectedPrice);
  const mileageFrom = useSelector(selectedMileageFrom);
  const mileageTo = useSelector(selectedMileageTo);
  const filterValue = useSelector(selectsFilteredMake);
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
      toast.info(`${car.make} ${car.model} removed from favorites`);
      setLike(null);
    } else {
      dispatch(setFavorites(car));
      toast.info(`${car.make} ${car.model} add to favorites`);
      setLike(index);
    }
  };

  const koma = (distance) => {
    const numberTuString = distance.toString();
    const wordWichKoma = numberTuString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return wordWichKoma;
  };
  const getFilteredCars = () => {
    let filteredCars = cars.slice();
    if (filterValue) {
      filteredCars = filteredCars.filter((car) =>
        car.make.toLowerCase().includes(filterValue.toLowerCase().trim())
      );
    } else {
      toast.warning("No search results, enter make");
    }

    if (carsPrice) {
      filteredCars = filteredCars.filter(
        (car) => parseFloat(car.rentalPrice.replace("$", "")) <= carsPrice
      );
    } else {
      toast.warning("No search results, enter rentalPrice");
    }

    if (mileageFrom) {
      filteredCars = filteredCars.filter(
        (car) =>
          Number(car.mileage) >= mileageFrom && Number(car.mileage) <= mileageTo
      );
    } else {
      toast.warning("No search results, enter mileageFrom, mileageTo ");
    }
    return filteredCars;
  };

  return (
    <section>
      <StyledContainer>
        <StyledCarsList>
          {(filterValue || carsPrice || mileageFrom || mileageTo
            ? getFilteredCars()
            : cars
          ).map((car, index) => {
            const mileage = koma(car.mileage);
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
                  <StyledCarTextt>{mileage}</StyledCarTextt>
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
        <LoadMore />
      </StyledContainer>
    </section>
  );
};
export default Cars;
