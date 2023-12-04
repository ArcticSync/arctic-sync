import React from 'react';

const Button = ({text}) => {
  return (
    <div className="w h-[34px] px-3 py-1.5 bg-orange-400 rounded-md justify-start items-center gap-2.5 inline-flex hover:bg-white border-2 border-orange-400 transition-all duration-300 ease-in-out">
        <div className="text-black text-sm font-serif font-['Noto Serif']">{text}</div>
    </div>
  );
}

export default Button;