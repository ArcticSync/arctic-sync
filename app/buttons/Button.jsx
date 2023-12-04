import React from 'react';

const Button = ({ text }) => {
  return (
    <div className="relative w-[100px] h-[34px] bg-gradient-to-l from-amber-100 to-orange-500 rounded-md justify-center items-center gap-2.5 inline-flex overflow-hidden">
      <button className="text-black text-sm font-serif z-10">{text}</button>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-orange-400 to-orange-500 animate-shimmer"></div>
    </div>
  );
}

export default Button;
