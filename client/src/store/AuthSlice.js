import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialAuthState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") || false,
  username: localStorage.getItem("username") || "anonymous",
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    load: (state) => {
      state.isLoading = true;
    },
    login: (state, actions) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.username = actions.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.username = "anonymous";
      localStorage.removeItem("username");
      localStorage.removeItem("isAuthenticated");
    },
    setError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const { login, logout, load, setError } = authSlice.actions;
export default authSlice;

// async thunk action for login

export function fetchLogin(data) {
  return async (dispatch) => {
    dispatch(load());
    try {
      const res = await axios.post("/auth/login", data);
      const ResData = await res.data;
      if (!ResData.ok) {
        dispatch(setError(ResData.error));
      } else {
        localStorage.setItem("username", ResData.username);
        localStorage.setItem("isAuthenticated", true);
        dispatch(login(ResData.username));
      }
    } catch (error) {
      console.log(error);
      dispatch(setError(error.message));
    }
  };
}

// async thunk action for signup

export function fetchSignup(data) {
  return async (dispatch) => {
    dispatch(load());
    try {
      const res = await axios.post("/auth/signup", data);
      const ResData = await res.data;
      if (!ResData.ok) {
        dispatch(setError(ResData.error));
      } else {
        localStorage.setItem("username", ResData.username);
        localStorage.setItem("isAuthenticated", true);
        dispatch(login(ResData.username));
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
}
