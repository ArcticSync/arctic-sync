import React from 'react';

const SignUpInfo = () => {
  return (
    <div className='bg-gray-200 flex items-center justify-center p-12 w-80'>
      <div className='sign-up-container w-300 flex flex-col'>
        <input
          type="text"
          placeholder="Enter your AWS Client Id"
          className='mb-2 p-2 border rounded-md focus:outline-none focus:shadow-outline-blue'
        />
        <input
          type="text"
          placeholder="Enter your AWS Secret Key"
          className='mb-2 p-2 border rounded-md focus:outline-none focus:shadow-outline-blue'
        />
        <input
          type="text"
          placeholder='Enter Username'
          className='mb-2 p-2 border rounded-md focus:outline-none focus:shadow-outline-blue'
        />
      </div>
    </div>
  );
};

export default SignUpInfo;
