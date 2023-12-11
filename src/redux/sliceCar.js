import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations";

const initialState = {
  carsInf: [],
  error: false,
  isLoading: false,
  morePages: false,
  liked: false,
  isModalOpen: false,
  selectedCar: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.carsInf = [...state.carsInf, ...payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const { setAllCars, setFilter } = carsSlice.actions;
