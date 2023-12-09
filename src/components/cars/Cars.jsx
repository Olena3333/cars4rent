import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import { StyledCarImgt, StyledCarsList } from "./Cars.styled";
import { StyledContainer } from "../../helpers/Container.styled";

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
            <li key={car.id}>
              <StyledCarImgt src={car.img} alt={car.make} height="268px" />
              <div>
                <h3>
                  {car.make}
                  <span>{car.model}</span>
                </h3>
                <h3>{car.year}</h3>
              </div>
              <div>
                <p>
                  {car.address
                    .split(" ")
                    [car.address.split(" ").length - 2].slice(0, -1)}
                </p>
                <p>
                  {car.address.split(" ")[car.address.split(" ").length - 1]}
                </p>
                <p>{car.rentalCompany}</p>
                <p>{car.type}</p>
                <p>{car.make}</p>
                <p>{car.mileage}</p>
                <p>{car.accessories[0]}</p>
              </div>
            </li>
          ))}
        </StyledCarsList>
      </StyledContainer>
    </section>
  );
};
export default Cars;
