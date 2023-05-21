import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items :[],
    status : 'idle',
    errorMsg: ''
}



//let url = 'https://fakestoreapi.com/products';

export const fetchProductsList = createAsyncThunk('products', async(id=null,{rejectWithValue})=>
{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    }catch(err){
        return rejectWithValue('Sorry! Something went Wrong')
    }
});



const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchProductsList.pending,(state,action)=>{
            state.status = 'loading';
            state.items = action.payload
        }).addCase(fetchProductsList.fulfilled,(state,action)=>{
            state.status = 'success';
            state.items = action.payload;
        }).addCase(fetchProductsList.rejected, (state,action)=>{
            state.status='Failed';
            state.items = [];
            state.errorMsg = action.payload
        })
    }
})
export default productsSlice.reducer

