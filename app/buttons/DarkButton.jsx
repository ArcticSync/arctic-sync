import React from 'react'
import { CiLogin } from "react-icons/ci";

const DarkButton = ({text}) => {
  return (
    <button className='border rounded-md p-2 flex items-center gap-2 bg-[#1c1c1c] hover:bg-[#121312]'>
        <CiLogin  />
        {text}
    </button>
  )
}

export default DarkButton