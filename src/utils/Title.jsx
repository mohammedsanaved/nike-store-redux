/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Title = ({ title }) => {
  return (
    <>
      <div className='grid items-center'>
        <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-slate-900 gilter drop-shadow-lg font-bold'>
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;
