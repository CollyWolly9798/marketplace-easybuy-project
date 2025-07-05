export interface AuthState {
  user: {
    email: string | null;
  };
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  needsEmailVerification: boolean;
}

export type Credentials = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  token: string;
  user: {
    email: string;
  };
};
