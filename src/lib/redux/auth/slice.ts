import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "@/lib/redux/auth/operations";
import { AuthState } from "@/types/Auth";

const initialState: AuthState = {
  user: {
    email: null,
  },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  needsEmailVerification: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: state => {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isRefreshing = false;
      state.needsEmailVerification = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = false;
        state.needsEmailVerification = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, state => {
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.needsEmailVerification = false;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.needsEmailVerification = false;
        state.isLoading = false;
      })
      .addCase(login.rejected, state => {
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      }),
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
