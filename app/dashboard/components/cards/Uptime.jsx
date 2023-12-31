import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Uptime = () => {
  return (
    <div className='w-[321px] flex flex-col bg-[#1c1c1c] rounded-md'>
      <div className='p-4'>Uptime</div>
      <div className='p-4'>
        <ProgressBar completed={100} bgColor="#088770" animateOnRender={true} />
      </div>
      <div className='p-4'>
        <ProgressBar completed={92.8} bgColor="#d38e09" animateOnRender={true} />
      </div>
    </div>
  );
}

export default Uptime;
