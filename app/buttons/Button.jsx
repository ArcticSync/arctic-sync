import React from 'react'

const Button = ({text}) => {
  return (
    <div className="relative w-[100px] h-[34px] rounded-md justify-center items-center gap-2.5 inline-flex bg-[#12ff80] hover:bg-[#0cb259] text-black font-semibold overflow-hidden font-poppins">
      {text}
    </div>
  )
}

export default Button
