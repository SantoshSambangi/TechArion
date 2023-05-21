import { configureStore } from "@reduxjs/toolkit";
//import productsSlice from "./productsSlice";
import usersSlice from "./usersSlice";


//console.log(store)
const store = configureStore({

    reducer:{
        users : usersSlice
    }
    
})
export default store;

//console.log(store.getState())