import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducer : {
        changeName(state) {
            return 'john' + state
        }
    }
})

export let {changeName} = user.actions

let stock = createSlice({
    name : 'stock',
    initialState : [
        {id : 0, name : 'white and black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ]
})

let cart = createSlice((
    name : 'cart',
    initialState : {
        
    }
))

export default configureStore({
    reducer : {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
     }
})