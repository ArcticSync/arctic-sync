import React, { useState } from 'react';
import { CiLogin } from "react-icons/ci";
import { Othent } from 'othent';

const DarkButton = () => {
  const [buttonText, setButtonText] = useState('Log In');
  const logIn = async () => {
    const othent = await Othent({ 
      API_ID: '7c9e8886193237ef8e8b8f3385801b96'
    });
    const userDetails = await othent.logIn();
    console.log(userDetails);
    // Change the button text after successfully logging in
    setButtonText('Successfully logged in');
  };
  
  return (
    <button onClick={logIn} className='border rounded-md p-2 flex items-center gap-2 bg-[#1c1c1c] hover:bg-[#121312] border-[#12ff80] text-[#12ff80]'>
      <CiLogin />
      {buttonText}
    </button>
  );
}

export default DarkButton;
