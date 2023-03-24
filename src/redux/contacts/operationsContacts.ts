import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Contact } from "models/contact";
import { toast } from "react-hot-toast";
import { AuthState } from "redux/auth/sliceAuth";

export const fetchContacts = createAsyncThunk<
  Contact[],
  undefined,
  { rejectValue: string; state: { auth: AuthState } }
>("contacts/fetchAll", async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  if (!state.auth.token) {
    toast.error("You have to be logged to see your contact list!");
    return [];
  }
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error: any) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk<
  Contact,
  Contact,
  {
    rejectValue: string;
    state: { auth: AuthState };
  }
>("contacts/add", async (contact, thunkAPI) => {
  console.log("contact: ", contact);
  try {
    const state = thunkAPI.getState();
    if (!state.auth.token) {
      toast.error("You have to be logged to see your contact list!");
      return;
    }
    const response = await axios.post("/contacts", contact);
    return response.data;
  } catch (error: any) {
    if (error.message) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const deleteContact = createAsyncThunk<
  Contact,
  string,
  { rejectValue: string }
>("contacts/delete", async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error: any) {
    if (error.message) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
});
