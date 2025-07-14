import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthResponse, Credentials } from "@/types/Auth";

axios.defaults.baseURL = "https://easybuy-qai8.onrender.com/api";

const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const login = createAsyncThunk<AuthResponse, Credentials, { rejectValue: string }>(
    "auth/login",
    async (credentials, thunkAPI) => {
        delete axios.defaults.headers.common.Authorization;
        try {
            const res = await axios.post<AuthResponse>("auth/login", credentials);
            const { accessToken, refreshToken } = res.data;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            setAuthHeader(accessToken);

            return res.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
            }
            return thunkAPI.rejectWithValue("Unknown login error");
        }
    }
);

export const register = createAsyncThunk<AuthResponse, Credentials, { rejectValue: string }>(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post<AuthResponse>("auth/register", credentials);
            setAuthHeader(res.data.accessToken);
            return res.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
            }
            return thunkAPI.rejectWithValue("Unknown register error");
        }
    }
);
export const logOut = createAsyncThunk<void, void, { rejectValue: string }>(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.get("auth/logout");

            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');

            delete axios.defaults.headers.common.Authorization;
        } catch (error) {
            return thunkAPI.rejectWithValue("Logout failed");
        }
    }
);

export const refreshUser = createAsyncThunk<AuthResponse, void, { rejectValue: string }>(
    "auth/refresh",
    async (_, thunkAPI) => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) throw new Error("No refresh token");

            const res = await axios.post<AuthResponse>("auth/refresh", { refreshToken });

            const newAccessToken = res.data.accessToken;

            localStorage.setItem("accessToken", newAccessToken);
            setAuthHeader(newAccessToken);

            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Unable to refresh user");
        }
    }
);
