import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const advertsCarApi = axios.create({
  baseURL: "https://65707ad809586eff66417935.mockapi.io",
});

export const fetchCarsThunk = createAsyncThunk(
  "fetchPage",
  async ({ page = 1, limit = 12 }, thunkApi) => {
    try {
      const { data } = await advertsCarApi.get("/Advert", {
        params: {
          page: page,
          limit: limit,
        },
      });
      // console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateLikeStatusThunk = createAsyncThunk(
  "fetchCar",
  async ({ id, liked }, thunkAPI) => {
    try {
      const updatedLikeStatus = Boolean(liked);
      const { data } = await advertsCarApi.put(`/Advert${id}`, {
        liked: updatedLikeStatus,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllPageCarsThunk = createAsyncThunk(
  "fetchAllPage",
  async (_, thunkApi) => {
    try {
      const { data } = await advertsCarApi.get(`/Advert`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getCarByIdThunk = createAsyncThunk(
  "fetchCar",
  async ({ id }, thunkApi) => {
    try {
      const { data } = await advertsCarApi.get(`/Advert/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
