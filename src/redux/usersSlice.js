import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    users:[],
    status:'idle',
    errorMsg:''
}

let url = 'https://jsonplaceholder.typicode.com/users';

 //let posts = 'https://jsonplaceholder.typicode.com/posts';

 export const fetchUsersList = createAsyncThunk("users", async() => {

    try{
            const response = await axios.get(url);
            return response.data
            
    }catch(err){
        return "Sorry! some thing went wrong"
    }

})

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchUsersList.pending ,(state,action) =>{
            state.status = "Loading"
        }).addCase(fetchUsersList.fulfilled,(state,action) =>{
            state.status = "Success";
            state.users = action.payload
        }).addCase(fetchUsersList.rejected , (state,action) =>{
                state.status = "Failed";
                state.errorMsg = "sorry some thing went wrong"
        })
    }
})

export default usersSlice.reducer;