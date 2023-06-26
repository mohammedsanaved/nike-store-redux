/* eslint-disable no-unused-vars */

import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import logo from '../assets/logo.png';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPersonFill } from 'react-icons/bs';
import { cartTotalQuantity, setOpenCart } from '../app/CartSlice.js';
import { Link } from 'react-router-dom';
import {
  setOpenWishList,
  wishCartTotalQuantity,
} from '../app/WishListCartSlice.js';
import SearchFeild from './SearchFeild';

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  // const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const totalQTY = useSelector(cartTotalQuantity);
  const totalWishQTY = useSelector(wishCartTotalQuantity);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  const onWishCartToggle = () => {
    dispatch(
      setOpenWishList({
        wishcartState: true,
      })
    );
  };
  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          !navState
            ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
            : 'fixed top-0 left-0 right-0 h-[12vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
        }
      >
        <nav className='flex items-center justify-between nike-container'>
          <div className='flex items-center'>
            <img
              src={logo}
              alt='logo/img'
              className={`w-16 h-auto ${navState && 'filter brightness-0'}`}
            />
          </div>
          {/* <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='search product here'
            className={
              'p-1 rounded-xl opacity-60 focus: border-none w-[60%] transition-all ease-in-out'
            }
          ></input> */}
          <SearchFeild />
          <ul className='flex items-center justify-center gap-2'>
            <li className='grid items-center'>
              <button>
                <MagnifyingGlassIcon
                  className={`icon-style ${
                    navState && 'text-slate-900 transition-all duration-300'
                  }
                }`}
                />
              </button>
            </li>
            <li className='grid items-center'>
              <button
                onClick={() => onWishCartToggle()}
                className='border-none outline-none active:scale-110 transition-all duration-300 relative'
              >
                <HeartIcon
                  className={`icon-style ${
                    navState && 'text-slate-900 transition-all duration-300'
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                      : 'bg-slate-100 text-slate-900 shadow-slate-100'
                  }`}
                >
                  {totalWishQTY}
                </div>
              </button>
            </li>
            <li className='grid items-center'>
              <button
                type='button'
                onClick={onCartToggle}
                className='border-none outline-none active:scale-110 transition-all duration-300 relative'
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && 'text-slate-900 transition-all duration-300'
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                      : 'bg-slate-100 text-slate-900 shadow-slate-100'
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
            <Link to='/register'>
              <div>
                <BsFillPersonFill
                  className={`icon-style ${
                    navState && 'text-slate-900 transition-all duration-300'
                  }`}
                />
              </div>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
