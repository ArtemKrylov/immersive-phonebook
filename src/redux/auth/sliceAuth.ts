import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { userLogin, userLogout, userSignUp } from "./operationsAuth";

const extraActions = [userLogin, userLogout, userSignUp];
const extraLoginActions = [userLogin, userSignUp];
const getActions = (type: "pending" | "rejected") =>
  extraActions.map((action) => action[type]);
const getLoginActions = (type: "fulfilled") =>
  extraLoginActions.map((action) => action[type]);

export type AuthState = {
  user: {
    name: string | null;
    email: string | null;
  };
  isLoading: boolean;
  error: string | null;
  token: string | null;
};

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
  },
  isLoading: false,
  error: null,
  token: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deleteToken(state, action: PayloadAction<string>) {
      state.token = null;
    },
  },
  extraReducers: (builder) =>
    builder
      //!logout
      .addCase(userLogout.fulfilled, (state, { payload }) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
      })
      //!Fulfilled login and signup
      .addMatcher(isAnyOf(...getLoginActions("fulfilled")), (state, action) =>
        authFulfilled(state, action)
      )
      //!Pending matcher
      .addMatcher(isAnyOf(...getActions("pending")), (state) =>
        authPending(state)
      )
      //!Rejected matcher
      .addMatcher(isAnyOf(...getActions("rejected")), (state, action) =>
        authRejected(state, action)
      ),
});

function authFulfilled(state: AuthState, action: any) {
  const { user, token } = action.payload;
  state.isLoading = false;
  state.user.name = user.name;
  state.user.email = user.email;
  state.token = token;
}

function authPending(state: AuthState) {
  state.isLoading = true;
  state.error = null;
}

function authRejected(state: AuthState, action: any) {
  state.isLoading = false;
  if (action.payload !== undefined) {
    state.error = action.payload;
  }

  state.token = null;
}

export const { deleteToken } = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
