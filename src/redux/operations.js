import  axios  from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6550e1fc7d203ab6626e4a09.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", async(_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } 
        catch (e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact", async (text, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", text);
            return response.data;
        } catch(e) {
return thunkAPI.fulfillWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch(e) {
return thunkAPI.rejectWithValue(e.message);
        }
    }
);



// const updateUser = createAsyncThunk(
//     'users/update',
//     async (userData, { rejectWithValue }) => {
//       const { id, ...fields } = userData
//       try {
//         const response = await userAPI.updateById(id, fields)
//         return response.data.user
//       } catch (err) {
//         // Use `err.response.data` as `action.payload` for a `rejected` action,
//         // by explicitly returning it using the `rejectWithValue()` utility
//         return rejectWithValue(err.response.data)
//       }
//     }
//   )