/* eslint-disable no-unused-vars */
import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/outline';

// eslint-disable-next-line react/prop-types
const WishListCartCount = ({ onWishCartToggle, clearCart }) => {
  return (
    <>
      <div className='bg-white h-14 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className='flex items-center gap-3'>
          <div
            className='grid items-center cursor-pointer'
            onClick={onWishCartToggle}
          >
            <ChevronDoubleRightIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
          </div>
          <div className='grid items-center'>
            <h1 className='text-base font-medium text-slate-900'>
              Your WishListCart{' '}
              <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>
                (Item)
              </span>
            </h1>
          </div>
        </div>
        <div className='flex items-center'>
          <button
            type='button'
            onClick={clearCart}
            className='rounded bg-theme-cart active:scale-90 p-0.5'
          >
            <TrashIcon className='w-5 h-5 text-white stroke-[2]' />
          </button>
        </div>
      </div>
    </>
  );
};

export default WishListCartCount;
