import { RootState } from "redux/store";

export const selectorAuth = (state: RootState) => state.auth;

export const selectorLoadingAuth = (state: RootState) => state.auth.isLoading;

export const selectorLogged = (state: RootState) => state.auth.token;

export const selectorNeedsToUpdate = (state: RootState) =>
  Boolean(
    state.auth.token &&
      state.auth.user.name === null &&
      state.auth.user.email === null
  );
