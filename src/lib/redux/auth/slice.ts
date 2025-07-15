import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {login, register, logOut, refreshUser} from "@/lib/redux/auth/operations"; // <-- додано logOut
import { AuthState, AuthResponse } from "@/types/Auth";

const initialState: AuthState = {
  accessToken: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  needsEmailVerification: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      setAccessToken(state, action: PayloadAction<string>) {
          state.accessToken = action.payload;
          state.isLoggedIn = true;
      },
    resetAuthState: (state) => {
      state.accessToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isRefreshing = false;
      state.needsEmailVerification = false;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(register.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
          state.accessToken = action.payload.accessToken;
          state.isLoggedIn = true;
          state.needsEmailVerification = true ;
          state.isLoading = false;
        })
        .addCase(register.rejected, (state) => {
          state.accessToken = null;
          state.isLoggedIn = false;
          state.isLoading = false;
          state.needsEmailVerification = false;
        })
        .addCase(login.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
          state.accessToken = action.payload.accessToken;
          state.isLoggedIn = true;
          state.isLoading = false;
          state.needsEmailVerification = false;
        })
        .addCase(login.rejected, (state) => {
          state.accessToken = null;
          state.isLoggedIn = false;
          state.isLoading = false;
        })
        .addCase(logOut.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(logOut.fulfilled, () => initialState)
        .addCase(logOut.rejected, (state) => {
          state.isLoading = false;
    }).addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
      state.isLoading = true;
    }).addCase(refreshUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
          state.accessToken = action.payload.accessToken;
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.isLoading = false;
        })
        .addCase(refreshUser.rejected, (state) => {
          state.accessToken = null;
          state.isLoggedIn = false;
          state.isRefreshing = false;
          state.isLoading = false;
        });
  },
});

export const { setAccessToken, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
