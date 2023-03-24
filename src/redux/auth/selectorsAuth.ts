import { RootState } from "redux/store";

export const selectorAuth = (state: RootState) => state.auth;

export const selectorLoadingAuth = (state: RootState) => state.auth.isLoading;

export const selectorLogged = (state: RootState) => state.auth.token;
