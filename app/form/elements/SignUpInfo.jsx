import React from 'react';

const SignUpInfo = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className=''>
        <div className=''>
          <div className="font-bold text-4xl font-sans mb-4 flex gap-3 justify-center">
            Grant <span className="text-[#12ff80]">S3</span> Access
          </div>
          <div className='w-[334px]'>
            <div className='bg-[#1c1c1c] flex items-center justify-center p-4 rounded-md'>
              <div className='sign-up-container flex flex-col p-10'>
                <input
                  type="text"
                  placeholder="Enter your AWS Client ID"
                  className='mb-8 p-2 w-[217px] h-8 border rounded-md focus:outline-none focus:shadow-outline-blue text-black'
                />
                <input
                  type="text"
                  placeholder="Enter your AWS Secret Key"
                  className='mb-8 p-2 w-[234px] h-8 border rounded-md focus:outline-none focus:shadow-outline-blue text-black'
                />
                <input
                  type="text"
                  placeholder='Enter Username'
                  className='p-2 border w-[187px] h-8 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="h-[5px] w-[83px] bg-[#12ff80] rounded-md" />
          </div>
          <div className='flex justify-end mt-2 gap-1.5'>
            (Step  <span className='text-[#12ff80]'> 1 </span> of 4)
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpInfo;
