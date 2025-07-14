// types/Auth.ts
export interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  needsEmailVerification: boolean;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface Credentials {
  email: string;
  password: string;
}
