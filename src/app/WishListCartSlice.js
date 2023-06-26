/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
  wishcartState: false,
  wishcartItems: localStorage.getItem('wishList')
    ? JSON.parse(localStorage.getItem('wishList'))
    : [],
  wishCartTotalQuantity: 0, // Add this line to the initial state
};

const WishListCartSlice = createSlice({
  initialState,
  name: 'wishList',
  reducers: {
    setOpenWishList: (state, action) => {
      state.wishcartState = action.payload.wishcartState;
    },
    setCloseWishList: (state, action) => {
      state.wishcartState = action.payload.wishcartState;
    },
    setRemoveItemFromWishCart: (state, action) => {
      const removeItem = state.wishcartItems.filter(
        (wishitem) => wishitem.id !== action.payload.id
      );
      state.wishcartItems = removeItem;
      localStorage.setItem('wishList', JSON.stringify(state.wishcartItems));
      toast.success(`${action.payload.title} Removed Cart `);
    },
    setClearWishCartItems: (state, action) => {
      state.wishcartItems = [];
      toast.success(`Cart Cleared`);
      localStorage.setItem('wishList', JSON.stringify(state.wishcartItems));
    },
    setAddItemToWishCart: (state, action) => {
      const itemIndex = state.wishcartItems.findIndex(
        (wishitem) => wishitem.id === action.payload.id
      );
      if (itemIndex >= 0) {
        toast.success('Item already in Wishcart');
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.wishcartItems.push(temp);
        toast.success(`${action.payload.title} added to Wishcart`);
      }
      localStorage.setItem('wishList', JSON.stringify(state.wishcartItems));
    },
    setGetWishItems: (state, action) => {
      const totalWishQTY = state.wishcartItems.reduce(
        (total, wishItem) => total + wishItem.cartQuantity,
        0
      );
      state.wishCartTotalQuantity = totalWishQTY;
    },
  },
});

export const {
  setClearWishCartItems,
  setCloseWishList,
  setGetWishItems,
  setOpenWishList,
  setAddItemToWishCart,
  setRemoveItemFromWishCart,
} = WishListCartSlice.actions;
export const selectWishCartState = (state) => state.wishList.wishcartState;
export const selectWishCartItems = (state) => state.wishList.wishcartItems;
export const wishCartTotalQuantity = (state) =>
  state.wishList.wishCartTotalQuantity;

export default WishListCartSlice.reducer;
