import { createSlice } from "@reduxjs/toolkit";
let prevCart;
if(localStorage.getItem('cartItems'))
{
    prevCart=JSON.parse(localStorage.getItem('cartItems'));
}
else{
   prevCart=[];
}
const initialState={
     
    product:[...prevCart], 
}

export const addToCartSlice=createSlice({
    name:"addToCart",
    initialState,
    reducers:{
     addToCart:(state,action)=>{
       state.product=[...state.product,action.payload];
       console.log(state.product);
       localStorage.setItem("cartItems",JSON.stringify([...state.product]));

     },
    
     
    }
})
export const {addToCart} =addToCartSlice.actions;
export default addToCartSlice.reducer;