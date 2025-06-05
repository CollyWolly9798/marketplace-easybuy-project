interface User {
  email: string | null;
}

export interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
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
