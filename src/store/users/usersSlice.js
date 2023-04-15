import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('users/fetchData', async() => {
    try {
        const response = await axios.get('https://randomuser.me/api/?results=5')
        return response.data
    }
    catch(error){
        throw new console.error(error);
    }
})

const initialState = {
    users:[],
    isloading: false,
    error: ''
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.isloading = true
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.users.push(action.payload)
        })
        .addCase(fetchData.rejected, (state) => {
            state.error = true
        })
    }
})

export default userSlice;