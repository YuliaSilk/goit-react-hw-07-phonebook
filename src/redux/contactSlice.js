import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsSlise = createSlice ({
    name: "contacts",
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
        filter: '',
        },
       
 reducers: {
    
    setFilter: (state, action) => {
        state.filter = action.payload;
    }
  
    },

    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },
        [fetchContacts.rejected] (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload);
        },
        [addContact.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.pending](state){
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id);
            // const index = state.contacts.findIndex(task => task.id === action.payload);
            // state.contacts.splice(index, 1);
        },
        [deleteContact.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        }

    }
})




export const contactsReducer = contactsSlise.reducer;
// export const { addContact, deleteContact } = contactsSlise.actions;

// extraReducers: {
//     [fetchTasks.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchTasks.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
// export const tasksReducer = tasksSlice.reducer;
