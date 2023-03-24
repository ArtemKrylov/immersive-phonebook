import { RootState } from "../store";

export const selectContacts = (state: RootState) => state.contacts.data;

export const selectLoadingContacts = (state: RootState) =>
  state.contacts.isLoading;
