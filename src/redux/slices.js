import { createSlice } from "@reduxjs/toolkit";



export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {value: []},
    reducers: {
        addContact: (state, action) => {
            state.value.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload);
        }
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


export const {addContact, deleteContact} = contactsSlice.actions;
export const {chageFilter} = filterSlice.actions;