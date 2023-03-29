import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setBaseURL } from "redux/constants/baseURL";
import { User } from "../../models/user";
import { toast } from "react-hot-toast";
import { AuthState } from "./sliceAuth";

setBaseURL();

//add JWT from axios headers
function setAuthHeader(token: string): void {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

//remove JWT from axios headers
function clearAuthHeader(): void {
  axios.defaults.headers.common.Authorization = "";
}

function checkIfLoggedIn(token: string) {
  if (token) {
    return true;
  }
  return false;
}

export type FetchTodosError = {
  message: string;
};

//!SignUp
export const userSignUp = createAsyncThunk<
  { user: { name: string; email: string }; token: string } /* returns */,
  User /* first param in payloadcreator function */,
  { rejectValue: string; state: { auth: AuthState } }
>("auth/signUp", async (user, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (token !== null && checkIfLoggedIn(token)) {
    toast.error("You have to logout first!");
    return;
  }
  try {
    const response = await axios.post("/users/signup", user);
    setAuthHeader(response.data.token);
    toast.success(`Signed up user ${user.name} successfully!`);
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

//!Login
export const userLogin = createAsyncThunk<
  { user: { name: string; email: string }; token: string },
  { email: string; password: string },
  { rejectValue: string; state: { auth: AuthState } }
>("auth/login", async (user, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (token !== null && checkIfLoggedIn(token)) {
    toast.error("You have to logout first!");
    return;
  }
  try {
    const response = await axios.post("/users/login", user);
    setAuthHeader(response.data.token);
    toast.success(`Logged in user successfully!`);
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

//!logout
export const userLogout = createAsyncThunk<
  User,
  string,
  { rejectValue: string }
>("auth/logout", async (token, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout", token);
    const state: any = thunkAPI.getState();
    toast.success(`Logged out user ${state.name}`);
    clearAuthHeader();
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

//!Update
export const userUpdate = createAsyncThunk<
  User,
  string,
  { rejectValue: string }
>("auth/update", async (token, thunkAPI) => {
  try {
    setAuthHeader(token);
    const response = await axios.get("/users/current");
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
