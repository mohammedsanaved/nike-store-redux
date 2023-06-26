/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import emptybag from '../../assets/emptybag.png';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const WishListCartEmpty = ({ onWishCartToggle }) => {
  return (
    <>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img
          src={emptybag}
          alt='emptybag/img'
          className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110 hover:-rotate-180'
        />
        <button
          type='button'
          className='button-theme bg-gradient-to-b from-sky-200 to-sky-500 shadow-lg shadow-sky-400 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'
          onClick={onWishCartToggle}
        >
          <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
          <span className=''>Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default WishListCartEmpty;