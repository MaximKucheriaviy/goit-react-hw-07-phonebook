import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";


export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchContacts.pending](state, action){
            state.isLoading = true;
            state.error = null
        },
        [fetchContacts.fulfilled](state, action){
            state.isLoading = false;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending](state, action){
            state.isLoading = true;
            state.error = null
        },
        [addContact.fulfilled](state, action){
            state.isLoading = false;
            state.items.push(action.payload);
        },
        [addContact.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.pending](state, action){
            state.isLoading = true;
            state.error = null
        },
        [deleteContact.fulfilled](state, action){
            state.isLoading = false;
            state.items = state.items.filter(({id}) => id !== action.payload);
        },
        [deleteContact.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const filterSlice = createSlice({
    name: "filer",
    initialState: "",
    reducers:{
        chageFilter: (state, action) => {
            return action.payload;
        }
    }
})

export const {chageFilter} = filterSlice.actions;