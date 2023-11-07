import {configureStore} from '@reduxjs/toolkit';
import cartSlice  from '../Slices/addToCartSlice';
import wishedSlice from '../Slices/addTowishlist';
export const myStore=configureStore({
    reducer:{
        carts:cartSlice,
        wished:wishedSlice,
    },
})