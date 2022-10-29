import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://635cc4c4f0bc26795b047836.mockapi.io"

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