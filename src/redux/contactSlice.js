import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }

const contactsSlise = createSlice ({
    name: "contacts",
    initialState: {
        contacts: [],
        filter: '',
        },
 reducers: {
    addContacts: (state, action) => {
        state.contacts.push(action.payload);
    },
    deleteContacts: (state, action) => {
        state.contacts = state.contacts.filter(
            contact => contact.id !== action.payload
        );
    },
    // setFilter: (state, action) => {
    //     state.filter = action.payload;
    // },
    },
})
export const persistedContactsReducer = persistReducer(persistConfig, contactsSlise.reducer)


export const contactsReducer = contactsSlise.reducer;
export const { addContacts, deleteContacts } = contactsSlise.actions;


