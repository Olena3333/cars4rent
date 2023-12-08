import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations";

const initialState = {
  filter: {
    name: "",
    price: "",
    from: null,
    to: null,
  },
  startData: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStartData: (state) => {
      state.startData = fetchCarsThunk;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setName: (state, { payload }) => {
      state.filter.name = payload;
    },
    setPrice: (state, { payload }) => {
      state.filter.price = payload;
    },
    setFrom: (state, { payload }) => {
      state.filter.from = payload;
    },
    setTo: (state, { payload }) => {
      state.filter.to = payload;
    },
  },
});

export const { setStartData, setFilter, setName, setPrice, setFrom, setTo } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
