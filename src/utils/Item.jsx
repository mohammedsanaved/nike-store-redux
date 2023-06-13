/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

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
            <button
              type='button'
              className='bg-white blur-effect-theme button-theme p-1 shadow-dark-200'
            >
              <ShoppingBagIcon className='icon-style text-slate-900 ' />
            </button>
            <button
              type='button'
              className='bg-white blur-effect-theme button-theme p-1 shadow-dark-200 text-sm text-black px-2 font-medium'
            >
              {btn}
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
