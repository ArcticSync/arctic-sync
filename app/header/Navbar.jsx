import React from 'react'
import Image from 'next/image'
import Button from '../buttons/Button'

const Navbar = () => {
  return (
    <>
        <nav>
            <div className="flex items-center justify-between">
                <div className='p-2 pl-4'>
                    <Image src="../logo.svg" width={40} height={40}/>
                </div>
                <div className="hidden space-x-12 md:flex">
                    <a href="#" className="relative inline-block group rounded-lg px-2 py-1 text-xs font-medium text-gray-900">
                        Home
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-black to-white transform scale-x-0 transform-origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </a>
                    <a href="#" className="relative inline-block group rounded-lg px-2 py-1 text-xs font-medium text-gray-900">
                        Developers
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-black to-white transform scale-x-0 transform-origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </a>
                    <a href="#" className="relative inline-block group rounded-lg px-2 py-1 text-xs font-medium text-gray-900">
                        About Us
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-black to-white transform scale-x-0 transform-origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </a>
                    <a href="#" className="text-xs relative inline-block group rounded-lg px-2 py-1 font-medium text-gray-900">
                        FAQ
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-black to-white transform scale-x-0 transform-origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </a>
                </div>
                <div className="hidden mr-8 p-3 px-6 pt-2 text-gray-900 bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
                    <Button text="Connect"/>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar