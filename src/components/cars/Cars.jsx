import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  // const car = useSelector(selectSelectedCar);

  // const isModalOpen = useSelector(selectOpenModal);
  useEffect(() => {
    dispatch(fetchCarsThunk(1, 12));
  }, [dispatch]);

  return (
    <div>
      Cars
      <ul>
        {cars?.map((car) => (
          <li key={car.id}>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.rentalCompany}</p>
            <img src={car.img} alt={car.make} height="446px" />
            <p>{car.mileage}</p>
            <h2>{car.rentalPrice}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cars;
