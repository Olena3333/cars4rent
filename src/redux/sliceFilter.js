import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCarsThunk } from "./operations";

const initialState = {
  filter: {
    make: "",
    price: 0,
    mileageFrom: 0,
    mileageTo: 0,
  },
  allCar: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter.make = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.filter.price = action.payload;
    },
    setMileageFrom: (state, action) => {
      state.filter.mileageFrom = Number(action.payload);
    },
    setMileageTo: (state, action) => {
      state.filter.mileageTo = Number(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCar = action.payload;
      })
      .addCase(fetchAllCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setFilter,
  setPriceFilter,
  setMileageFrom,
  setMileageTo,
  setAllCars,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
