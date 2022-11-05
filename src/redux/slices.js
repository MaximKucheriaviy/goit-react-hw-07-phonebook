import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, createNewUser, loginUser } from "./operations";



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


function userSliceInit(){
    const init = {
        token: "",
        isLoading: false,
        error: null,
    }
    const storedToken = localStorage.getItem("userToken");
    if(storedToken){
        init.token = JSON.parse(storedToken);
    }
    return init;
}

export const userSlice = createSlice({
    name: "userToken",
    initialState: userSliceInit(),
    reducers:{
        logOut(state, action){
            localStorage.removeItem("userToken");
            state.token = "";
        },
        resetError(state, action){
            state.error = null;
        }
    },
    extraReducers: {
        [createNewUser.pending](state, action){
            state.isLoading = true;
        },
        [createNewUser.fulfilled](state, action){
            state.token = action.payload.token;
            localStorage.setItem("userToken", JSON.stringify(action.payload.token));
            state.isLoading = false;
        },
        [createNewUser.rejected](state, action){
            state.isLoading = false;
            switch (action.payload){
                case 400:
                state.error = "Веденно неправильний e-mail або пароль"    
            break;
                case 500:
                state.error = "Помилка серверу"    
            break;
            default:
                state.error = "Невыдома помилка"
            }
        },
        [loginUser.pending](state, action){
            state.isLoading = true;
        },
        [loginUser.fulfilled](state, action){
            state.isLoading = false;
            state.token = action.payload.token;
            localStorage.setItem("userToken", JSON.stringify(action.payload.token));
        },
        [loginUser.rejected](state, action){
            state.isLoading = false;
            switch (action.payload){
                case 400:
                state.error = "Веденно неправильний e-mail або пароль"    
            break;
                case 500:
                state.error = "Помилка серверу"    
            break;
            default:
                state.error = "Невыдома помилка"
            } 
        },
    }
})

export const {chageFilter} = filterSlice.actions;
export const {logOut, resetError} = userSlice.actions;