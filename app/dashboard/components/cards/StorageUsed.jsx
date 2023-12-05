import React from 'react'
import Image from 'next/image'

const StorageUsed = () => {
  return (
    <div className="w-[321px] h-[140px] border-[#1c1c1c] rounded-md relative bg-[#1c1c1c]">
        <div>
          <div className='p-4'>Storage Used</div>
          <div className='pl-4 flex justify-center items-center'>
                <Image src="../graph-icon.svg" width={40} height={40} />
            </div>
        </div>
    </div>
  )
}

export default StorageUsed