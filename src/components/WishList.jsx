/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOpenWishList,
  setCloseWishList,
  setClearWishCartItems,
  selectWishCartItems,
  selectWishCartState,
  setGetWishItems,
} from '../app/WishListCartSlice.js';
import WishListCartCount from './wishList/WishListCartCount.jsx';
import WishListCartEmpty from './wishList/WishListCartEmpty.jsx';
import WishListCartItem from './wishList/WishListCartItem.jsx';

const WishList = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectWishCartState);
  const wishListItems = useSelector(selectWishCartItems);
  console.log(wishListItems);

  // console.log(wishListItems);

  useEffect(() => {
    dispatch(setGetWishItems(wishListItems));
  }, [wishListItems, dispatch]);

  const onWishCartToggle = () => {
    dispatch(
      setCloseWishList({
        cartState: false,
      })
    );
  };
  const clearCart = () => {
    dispatch(setClearWishCartItems());
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-8'
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState
              ? 'opacity-100 visible translate-x-0'
              : 'opacity-0 invisible translate-x-8'
          }`}
        >
          <WishListCartCount
            onWishCartToggle={onWishCartToggle}
            clearCart={clearCart}
          />
          {wishListItems?.length === 0 ? (
            <WishListCartEmpty onWishCartToggle={onWishCartToggle} />
          ) : (
            <div>
              <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3'>
                {wishListItems?.map((item, i) => (
                  <WishListCartItem key={i} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishList;
