// user Type that will return the APi
export interface userLoginData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

// store Types
export interface loginStoreState {
  userLoginData: userLoginData | null;
  loading: boolean;
  submitUser: (username?: string, password?: string) => Promise<void>;
}
