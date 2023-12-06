import React from 'react';
import Image from 'next/image';
import Button from '../buttons/Button';

const Navbar = () => {
  return (
    <div className='h-[52px] m-8 p-4 mt-2 mb-0 flex justify-between items-center'>
      <div className='flex items-center'>
        <Image src="../logo.svg" width={40} height={40} alt="Logo" />
        <span className='ml-2 text-lg text-white'>ArcticSync</span>
      </div>
      <div className='flex gap-20'>
        <div className='flex items-center gap-2 transition-opacity duration-300 ease-in-out hover:opacity-70'><a href="/dashboard">Dashboard</a></div>
        <div className='flex items-center gap-2 transition-opacity duration-300 ease-in-out hover:opacity-70'><a href="/upload">Upload</a></div>
        <Button text='Connect' />
      </div>
    </div>
  );
}

export default Navbar;
