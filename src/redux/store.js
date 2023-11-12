import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactSlice";
import {
   persistStore,
   // persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
 } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);


export const store = configureStore({
reducer: {
   contacts: persistedContactsReducer,
   filter: filterReducer,
},

middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),
});

export const persistor = persistStore(store);
