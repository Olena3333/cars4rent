import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk, updateLikeStatusThunk } from "./operations";

const initialState = {
  carsInf: [],
  error: false,
  isLoading: false,
  liked: false,
  isModalOpen: false,
  selectedCar: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.carsInf = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateLikeStatusThunk.fulfilled, (state, { payload }) => {
        const { id, liked } = payload;
        const carToUpdate = state.cars.find((car) => car.id === id);
        if (carToUpdate) {
          carToUpdate.liked = liked;
        }
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const { setCars, setId, setLoading, setError, setAllCars, setFilter } =
  carsSlice.actions;
