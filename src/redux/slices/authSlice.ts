import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface AuthState {
  user: User | null;
}


const initialState: AuthState = {
  user: null, // ❌ No localStorage restore
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    // User fetched from API (/auth/me)
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
      Cookies.remove("user_token");
    },
  },
});

export const {  setUserData, logout } = authSlice.actions;
export default authSlice.reducer;
