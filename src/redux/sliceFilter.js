import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    make: "",
    price: 0,
    mileageFrom: 0,
    mileageTo: 0,
  },
  allCar: [],
  isLoading: false,
  error: null,
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
});

export const { setFilter, setPriceFilter, setMileageFrom, setMileageTo } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
