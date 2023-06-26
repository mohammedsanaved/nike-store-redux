/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
// import { HeartIcon } from '@heroicons/react/24/outline';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddItemToCart, setCloseCart } from '../app/CartSlice';
import {
  setAddItemToWishCart,
  setRemoveItemFromWishCart,
  selectWishCartItems,
} from '../app/WishListCartSlice';
import { toast } from 'react-hot-toast';

const Item = ({
  ifExists,
  id,
  // color,
  // shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const wishCartItems = useSelector(selectWishCartItems);

  const onAddToCart = () => {
    const item = { id, title, text, img, price };
    dispatch(setAddItemToCart(item));
  };
  const onRemoveItemFromWishList = () => {
    const itemIndex = wishCartItems.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      dispatch(setRemoveItemFromWishCart({ id, title, text, img, price }));
      toast.success(`${title} Removed from Wishcart`);
    }
  };
  // const onRemoveitem = () => {
  //   dispatch(setRemoveItemFromWishCart({ id, title, text, img, price }));
  // };
  const onAddToWishList = () => {
    setIsClicked(!isClicked);
    const wishitem = { id, title, text, img };
    dispatch(setAddItemToWishCart(wishitem));
    if (isClicked) {
      toast.success(`${title} added to Wishcart`);
    } else {
      toast.success(`${title} removed from Wishcart`);
    }
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b from-sky-600 to-indigo-600 shadow-lg shadow-blue-500 grid items-center ${
          ifExists ? 'justify-items-start' : 'justify-items-center'
        } rounded-xl py-8 px-6 transition-all duration-700 ease-in-out w-full hover:scale-110`}
      >
        <div className='grid items-center justify-center'>
          <h1 className='text-black text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>
            {title}
          </h1>
          <p className='text-slate-300 filter drop-shadow text-base md:text-sm font-normal'>
            {text}
          </p>
          <div className='flex items-center justify-between my-2 w-28'>
            <div className='flex items-center px-1 rounded-md'>
              <h1 className='text-white font-bold text-md '>${price}</h1>
            </div>
            <div className='flex items-center gap-1'>
              <StarIcon className='icon-style text w-5 h-5 lg:w-4 md:h-4 ' />
              <h1 className='md:text-sm font-normal text-slate-100'>
                {rating}
              </h1>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            {/* <button
              type='button'
              // onClick={() => onRemoveitem()}
              // onClick={() => onAddToWishList()}
              // className={`blur-effect-theme button-theme p-1 shadow-dark-200 ${
              //   isClicked ? `` : ''
              // }`}
              className={'blur-effect-theme button-theme p-0.5'}
            >
              {isClicked ? (
                <span onClick={() => onAddToWishList()}>
                  <FaHeart className='icon-style bg-red-500' />
                </span>
              ) : (
                <span>
                  <FaRegHeart className='icon-style bg-slate-700' />
                </span>
              )}
            </button> */}
            <button
              type='button'
              className='button-theme p-0.5'
              onClick={onAddToWishList}
            >
              {isClicked ? (
                <span>
                  <FaHeart className='icon-style text-red-500' />
                </span>
              ) : (
                <span>
                  <FaRegHeart className='icon-style text-white' />
                </span>
              )}
            </button>
            <button
              type='button'
              className='bg-white blur-effect-theme button-theme p-1 shadow-dark-200 text-sm text-black px-2 font-medium flex'
              onClick={() => onAddToCart()}
            >
              <span>
                <ShoppingBagIcon className='h-6 w-6 p-0.5 flex' />
              </span>
              <span className='h-6'>{btn}</span>
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? 'absolute top-5 right-1' : 'justify-center'
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 ${
              ifExists
                ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]'
                : 'h-36 w-64'
            }`}
          />
        </div>
      </div>
    </>
  );
};
export default Item;
