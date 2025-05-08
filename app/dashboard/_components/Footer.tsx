import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-t from-[#1c2121] to-[#616865]  text-white py-6 mt-8 w-full'>
      <div className='container mx-auto px-4 py-4 text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} AI Content Generator. All rights
          reserved. Built by <span className='font-semibold'>Fariha</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
