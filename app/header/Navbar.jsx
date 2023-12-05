import React from 'react';
import Image from 'next/image';
import Button from '../buttons/Button';

const Navbar = () => {
  return (
    <div className='h-[52px] m-8 p-4 mt-2 mb-0 flex justify-between items-center'>
      <div className='flex items-center'>
        <Image src="../logo.svg" width={40} height={40} alt="Logo" />
        <span className='ml-2 text-lg text-white'>Swiftify</span>
      </div>
      <Button text='Connect' />
    </div>
  );
}

export default Navbar;
