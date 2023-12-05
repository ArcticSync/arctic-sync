import React from 'react';

const SignUpInfo = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className=''>
        <div className=''>
          <div className="font-bold text-4xl font-sans mb-4 flex justify-center">
            Grant <span className="text-orange-500">S3</span> Access
          </div>
          <div className='w-[334px]'>
            <div className='bg-gray-200 flex items-center justify-center p-4 rounded-md'>
              <div className='sign-up-container flex flex-col p-10'>
                <input
                  type="text"
                  placeholder="Enter your AWS Client ID"
                  className='mb-8 p-2 w-[217px] h-8 border rounded-md focus:outline-none focus:shadow-outline-blue'
                />
                <input
                  type="text"
                  placeholder="Enter your AWS Secret Key"
                  className='mb-8 p-2 w-[234px] h-8 border rounded-md focus:outline-none focus:shadow-outline-blue'
                />
                <input
                  type="text"
                  placeholder='Enter Username'
                  className='p-2 border w-[187px] h-8 rounded-md focus:outline-none focus:shadow-outline-blue'
                />
              </div>
            </div>
          </div>
          <div className="w-[81px] h-[5px] mt-4">
            <div className="h-[5px] bg-orange-500 rounded-md" />
          </div>
          <div className='flex justify-end mt-2'>
            (Step  <span className='text-orange-500'> 1 </span> of 4)
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpInfo;
