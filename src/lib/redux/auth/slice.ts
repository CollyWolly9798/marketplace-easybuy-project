import { createSlice } from '@reduxjs/toolkit';
import { register } from '@/lib/redux/auth/operations';
import { AuthState } from '@/types/Auth';

const initialState: AuthState = {
  user: {
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export default authSlice.reducer;
