import React from 'react';

const Landing = () => {
  return (
    <div className='flex flex-col md:flex-row m-2'>
      <div className='flex-1 bg-gray-300 m-4 ml-8 mb-8 mt-2 mr-2 h-[590px] px-1/2 pt-[118px] pb-[468px] bg-gradient-to-bl from-orange-400 via-orange-500 to-amber-800 rounded-[10px] flex-col justify-start items-center inline-flex'>
        <div className='font-inter text-white text-4xl font-semibold'>
          {/* Content for the first div */}
        </div>
      </div>
      <div className='flex-1 bg-gray-200 p-4 mr-8 mb-8 mt-2 ml-2 h-[590px] px-1/2 pt-[118px] pb-[468px] rounded-[10px] flex-col justify-start items-center inline-flex'>
        {/* Content for the second div */}
      </div>
    </div>
  );
}

export default Landing;
