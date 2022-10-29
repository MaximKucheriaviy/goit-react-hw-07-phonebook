import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./slices";
import { filterSlice } from "./slices";


export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter:  filterSlice.reducer
    },
})

