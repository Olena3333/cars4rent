import { useDispatch, useSelector } from "react-redux";
import {
  StyledLoadMoreButton,
  StyledLoadMoreContainer,
} from "./LoadMore.styled";
import { selectCars } from "../../redux/selectors";
import { fetchCarsThunk } from "../../redux/operations";
import { useEffect, useState } from "react";

const LoadMore = () => {
  const cars = useSelector(selectCars);

  const [page, setShowedCars] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const payload = {
      page: page,
      limit: 12,
    };
    dispatch(fetchCarsThunk(payload));
  }, [dispatch, page]);

  const showMore = () => {
    setShowedCars((prevShowedCars) => prevShowedCars + 1);
  };

  return cars.length !== page * 12 ? (
    ""
  ) : (
    <StyledLoadMoreContainer>
      <StyledLoadMoreButton type="button" onClick={showMore}>
        Load More
      </StyledLoadMoreButton>
    </StyledLoadMoreContainer>
  );
};
export default LoadMore;
