export const selectCars = (state) => state.cars.carsInf;
export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectLikedCars = (state) => state.cars.liked;
export const selectFavorites = (state) => state.cars.favorites;

export const selectSelectedCar = (state) => state.cars.selectedCar;
