import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
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

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  // const car = useSelector(selectSelectedCar);
  // const isModalOpen = useSelector(selectOpenModal);

  useEffect(() => {
    dispatch(fetchCarsThunk(1));
  }, [dispatch]);

  // const isOpen = (car) => {
  //   dispatch(selectSelectedCar(car));
  //   dispatch(setOpenModal(true));
  // };

  // const isClosed = () => {
  //   dispatch(setOpenModal(false));
  // };

  return (
    <section>
      <StyledContainer>
        <StyledCarsList>
          {cars?.map((car) => (
            <StyledCarImgContainer key={car.id}>
              <StyledCarImgt src={car.img} alt={car.make} height="268px" />
              <StyledCarLike
                width="18"
                height="18"
                // $like={isFavorite || like === index}
                // onClick={() => toggleFavoritesHandler(car, index)}
              >
                <use href={`${sprite}#icon-normal`} />
              </StyledCarLike>
              <StyledCarPriseDiv>
                <StyledCarTextTitle>
                  {car.make}
                  <span> {car.model}</span>, {car.year}
                </StyledCarTextTitle>
                <StyledCarTextTitle>{car.rentalPrice}</StyledCarTextTitle>
              </StyledCarPriseDiv>
              <StyledCarlInfoDiv>
                <StyledCarTextt>
                  {car.address
                    .split(" ")
                    [car.address.split(" ").length - 2].slice(0, -1)}
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
              <StyledCarLearnMore
              // onClick={() => isOpen(car)}
              >
                Learn more
              </StyledCarLearnMore>
            </StyledCarImgContainer>
          ))}
        </StyledCarsList>
      </StyledContainer>
    </section>
  );
};
export default Cars;
