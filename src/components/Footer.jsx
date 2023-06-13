/* eslint-disable no-unused-vars */
import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className='flex justify-around bg-theme pt-7 pb-5 mt-7'>
        <div>
          <h3 className='text-center nike-container flex'>
            Made with{' '}
            <span>
              <HeartIcon className='icon-style text-red-600' />
            </span>
          </h3>
          <p className='text-xl'>CopyRight &copy; 2023</p>
        </div>
        <div>
          <div className='flex gap-5'>
            <Link className='p-3' to={'https://github.com/mohammedsanaved'}>
              <BsGithub className='text-3xl transition-all hover:scale-110 md:text-2xl' />
            </Link>
            <Link
              className='py-3'
              to={'https://www.linkedin.com/in/mohammedsanaved/'}
            >
              <BsLinkedin className='text-3xl transition-all hover:scale-110 md:text-2xl' />
            </Link>
            {/* <Link to='/' target='_blank'></Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
