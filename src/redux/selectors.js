export const selectCars = (state) => state.cars.carsInf;
export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFavorites = (state) => state.favorites.favorite;

export const selectAllCars = (state) => state.filter.allCar;
export const selectedPrice = (state) => state.filter?.price || 0;

export const selectsFilteredMake = (state) => state.filter?.make;
export const selectFilter = (state) => state.filter.filter;

export const selectedMileageFrom = (state) => state.filter?.mileageFrom;
export const selectedMileageTo = (state) => state.filter?.mileageTo;
