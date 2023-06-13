/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const SocialLink = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt='social'
        className='lg:w-8 lg:h-8 md:w-6 md:h-6 w-10 h-10 cursor-pointer transition-all duration-200 hover:scale-110'
      />
    </>
  );
};

export default SocialLink;
