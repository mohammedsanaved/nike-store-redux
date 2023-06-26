import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import WishListCartSlice from './WishListCartSlice';

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    wishList: WishListCartSlice,
  },
});
export default Store;
