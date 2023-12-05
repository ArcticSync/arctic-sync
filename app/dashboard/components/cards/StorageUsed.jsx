import React from 'react'
import Image from 'next/image'

const StorageUsed = () => {
  return (
    <div className="w-[321px] h-[200px] border-[#1c1c1c] rounded-md relative bg-[#1c1c1c]">
        <div className="w-[321px] h-[200px] left-0 top-0 absolute bg-[#1c1c1c] shadow border-[#1c1c1c] rounded-md" />
        <div className="w-[314px] h-[208.49px] left-[7px] top-[39px] absolute">
            <div className="w-[114.64px] h-[114.64px] left-0 top-0 absolute opacity-60 bg-zinc-300 rounded-2xl" />
            <div className="w-40 h-[84px] left-[154px] top-[9px] absolute text-white text-[30px] font-bold font-['Inter']">Storage<br/>Used</div>
            <div className="w-[43.67px] h-[43.67px] p-[3.64px] left-[36.41px] top-[36.41px] absolute flex-col justify-center items-center inline-flex">
                <Image src="../graph-icon.svg" width={30} height={30} />
            </div>
        </div>
    </div>
  )
}

export default StorageUsed