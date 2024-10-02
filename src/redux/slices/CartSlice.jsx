/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
name: "cart",
initialState: {
    cart:[]
},
reducers:{
    addToCart :(state,action)=>{
        const existingItem = state.cart.find(
            (item)=>item.id === action.payload.id
        );
        if (existingItem) {
            state.cart = state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
            );
          } else {
            state.cart.push(action.payload);
          }
        },   //payload->data
    removeFromCart: (state,action)=>{
        state.cart = state.cart.filter((item)=> item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item);
    },
    decrementQty: (state, action) => {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
        );
},
setCart: (state, action) => {
  state.cart = action.payload;
}
}
})

export const {addToCart,removeFromCart,incrementQty,decrementQty,setCart} = CartSlice.actions;
export default CartSlice.reducer;


//slice me 3 cheex hoti h 1. name,2. initial state,3. reducers

//reducer --> aisa function jisse aap trigger kroge,  ye function 2 parameter leta h 1. state,action
    // state-> initialstate me cart ka data
    // action ->  
