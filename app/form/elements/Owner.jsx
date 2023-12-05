import React from 'react'
import DragComponent from '../uploader/DragComponent'
import Owners from '../ownerships/Owners'

const Owner = () => {
  return (
    <div>
      <div>
        {/* Add Owners */}
        {/* CSV */}
        <DragComponent />
        {/* CRUD */}
      </div>
      <div className="mx-4 text-gray-500 font-bold flex justify-center pt-4">OR</div>
      <div className='pt-4'>
        {/* Advanced Options -> Show Files */}
        <Owners />
        <div className="">
          <div className="h-[5px] w-[186px] bg-[#12ff80] rounded-md" />
        </div>
      </div>
    </div>
  )
}

export default Owner