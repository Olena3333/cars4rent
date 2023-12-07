import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const advertsCarApi = axios.create({
  baseURL: "https://65707ad809586eff66417935.mockapi.io/",
});

export const fetchCarsThunk = createAsyncThunk(
  "advertsCars",
  async ({ page = 1, limit = 12 }, thunkApi) => {
    try {
      const { data } = await advertsCarApi.get(
        `cars/car?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
