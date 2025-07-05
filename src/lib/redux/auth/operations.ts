import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RegisterResponse, Credentials } from "@/types/Auth";

axios.defaults.baseURL = "https://easybuy-qai8.onrender.com/api";

const setAuthHeader = (value: string) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk<RegisterResponse, Credentials, { rejectValue: string }>(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post<RegisterResponse>("auth/register", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const login = createAsyncThunk<RegisterResponse, Credentials, { rejectValue: string }>(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post<RegisterResponse>("auth/login", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred during login");
    }
  }
);
