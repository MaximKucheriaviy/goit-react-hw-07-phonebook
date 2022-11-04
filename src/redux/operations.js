import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

export const fetchContacts = createAsyncThunk("contacts/getAll", async (_, tunkAPI) => {
    try{
        const response = await axios({
            method: "get",
            url: "/contacts"
        });
        return response.data;
    }
    catch(e){
        return tunkAPI.rejectWithValue(e.message);
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (contact, tunkAPI) => {
    try{
        const response = await axios({
            method: "post",
            url: "/contacts",
            data: contact,
        });
        return response.data;
    }
    catch(e){
        return tunkAPI.rejectWithValue(e.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, tunkAPI) => {
    try{
        await axios({
            method: "delete",
            url: `/contacts/${id}`,
        });
        return id;
    }
    catch(e){
        return tunkAPI.rejectWithValue(e.message);
    }
})


export const createNewUser = createAsyncThunk("user/createNewUser", async (reqest, tunkAPI) => {
    try{
        const response =  await axios({
            method: "post",
            url: `/users/signup`,
            data: reqest,
        });
        return response.data;
    }
    catch(e){
        return tunkAPI.rejectWithValue(e.message);
    }
})

export const loginUser = createAsyncThunk("user/loginUser", async (reqest, tunkAPI) => {
    try{
        const response =  await axios({
            method: "post",
            url: `/users/login`,
            data: reqest,
        });
        return response.data;
    }
    catch(e){
        return tunkAPI.rejectWithValue(e.message);
    }
})