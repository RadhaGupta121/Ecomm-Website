import { createSlice } from "@reduxjs/toolkit";
let prevWish;
if(localStorage.getItem('wishedItems'))
{
     prevWish=JSON.parse(localStorage.getItem('wishedItems'));
}
else{
    prevWish=[];
}
const initialState={
     
    wishedProduct:[...prevWish], 
}
export const addToWishlist=createSlice({
    name:"addToWishlist",
    initialState,
    reducers:{
    //  mywishlist:(state,action)=>{
    //     console.log(action.payload.condition);
    //    state.wishedProduct=[...state.wishedProduct,action.payload];
    //    console.log(state.wishedProduct);
    //    localStorage.setItem("wishedItems",JSON.stringify([...state.wishedProduct]));
    //  },
    mywishlist: (state, action) => {
        console.log(action.payload.checkme); // Access the 'condition' property from the action
       if(action.payload.checkme)
       {
    // the icon is black and now after click it will be red ...so it means we have to add the product in wishlist
    console.log(action.payload.id);
    state.wishedProduct=state.wishedProduct.filter((item)=>item.id===action.payload.id);
        }
       else{
        // Delete the product from the wishlist
   
    state.wishedProduct = [...state.wishedProduct, action];
       }
        
       
        console.log(state.wishedProduct);
        localStorage.setItem("wishedItems", JSON.stringify([...state.wishedProduct]));
      }
      
      
    }
})
export const {mywishlist} =addToWishlist.actions;
export default addToWishlist.reducer;