import { create } from "zustand";
import type { userLoginData, loginStoreState } from "../types/loginStoreTypes";
import axios from "axios";

export const useLoginStore = create<loginStoreState>((set) => ({
  userLoginData: null,
  loading: false,

  submitUser: async (username?: string, password?: string) => {
    set({ loading: true });
    try {
      const response = await axios.post<userLoginData>(
        "https://dummyjson.com/auth/login",
        {
          username: username,
          password: password,
        },
      );

      set({ userLoginData: response.data, loading: false });
      localStorage.setItem("userName", response.data?.firstName);
      localStorage.setItem("token", response.data?.accessToken);
      return response;
    } catch (error) {
      console.log("Error from the Login Store", error);
    }
  },
}));
