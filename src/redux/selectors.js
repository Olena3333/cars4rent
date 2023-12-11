export const selectCars = (state) => state.cars.carsInf;
export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFavorites = (state) => state.favorites.favorite;

export const selectAllCars = (state) => state.filter.allCar;
export const selectedPrice = (state) => state.filter.filter.price;

export const selectsFilteredMake = (state) => state.filter.filter.make;

// export const selectedMileageFrom = (state) => state.filter.filter?.mileageFrom;
// export const selectedMileageTo = (state) => state.filter.filter?.mileageTo;

export const selectedMileageFrom = (state) =>
  state.filter.filter?.mileageFrom || 0;
export const selectedMileageTo = (state) => state.filter.filter?.mileageTo || 0;
