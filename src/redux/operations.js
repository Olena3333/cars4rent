import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const advertsCarApi = axios.create({
  baseURL: "https://65707ad809586eff66417935.mockapi.io",
});

export const fetchPageCarsThunk = createAsyncThunk(
  "fetchPage",
  async (  , thunkApi) => {
    try {
      const { data } = await advertsCarApi.get(
        
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchAllPageCarsThunk = createAsyncThunk(
 
);

export const getCarByIdThunk = createAsyncThunk(
  
);

// export const registerThunk = createAsyncThunk(
//   "register",
//   async (credentials, thunkApi) => {
//     try {
//       const { data } = await goItApi.post("users/signup", credentials);
//       setToken(data.token);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
