import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { userLogout } from "redux/auth/operationsAuth";

import { Contact } from "../../models/contact";
import { addContact, deleteContact, fetchContacts } from "./operationsContacts";

const extraActions = [addContact, deleteContact, fetchContacts];
const getItems = (type: "pending" | "rejected") =>
  extraActions.map((el) => el[type]);
const getFulfilledItems = (type: "fulfilled") =>
  extraActions.map((el) => el[type]);

export interface initialStateInterface {
  data: Contact[];
  isLoading: boolean;
  error: string | null;
}

const initialState: initialStateInterface = {
  data: [],
  isLoading: false,
  error: null,
};

const ContactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build
      //!Fetch all contacts
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        if (!payload) return;
        state.data = payload;
      })

      //!Add contact
      .addCase(addContact.fulfilled, (state, { payload }) => {
        if (!payload) return;
        state.data = [payload, ...state.data];
        toast.success("Contact added!");
      })

      //!Delete contact
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.data = state.data.filter((contact) => contact.id !== payload.id);
      })

      //!logout
      .addCase(userLogout.fulfilled, (state) => {
        state.data = [];
        state.isLoading = false;
        state.error = null;
      })

      //!Fulfilled matcher
      .addMatcher(isAnyOf(...getFulfilledItems("fulfilled")), (state) => {
        state.isLoading = false;
      })

      //!Pending matcher
      .addMatcher(isAnyOf(...getItems("pending")), (state) =>
        handlePending(state)
      )
      //!Rejected matcher
      .addMatcher(isAnyOf(...getItems("rejected")), (state, action) =>
        handleRejected(state, action)
      ),
});

function handlePending(state: initialStateInterface): void {
  state.isLoading = true;
  state.error = null;
}

function handleRejected(
  state: initialStateInterface,
  action: PayloadAction<any>
): void {
  state.isLoading = false;
  if (action.payload !== undefined) {
    state.error = action.payload;
  }
}

export const contactsReducer = ContactsSlice.reducer;
