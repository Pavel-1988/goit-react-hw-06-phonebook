import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContact(state, action) {
      state.items.push(action.payload)
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index,1)
    }
  }
})

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist:['items']
}

export const persistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { setContact, deleteContact } = contactSlice.actions;