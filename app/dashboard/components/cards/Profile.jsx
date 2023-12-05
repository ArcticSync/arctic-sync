import React from 'react';
import Image from 'next/image';

const Profile = () => {
  return (
    <div>
      <div className='w-[321px] h-[191px] relative bg-[#1c1c1c] rounded-md shadow flex-col justify-start items-start inline-flex'>
        <div className='w-[89px] h-[89px] bg-grey-800 rounded-full flex items-center justify-center m-4 border-2 border-zinc-200'>
          <Image src="../user.svg" width={60} height={60} className='' />
        </div>
        <div className="p-4">
          <div className="text-white font-bold text-sm">
            Username: JohnDoe
          </div>
          <div className="text-white text-sm">
            Address: 123 Main Street
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
