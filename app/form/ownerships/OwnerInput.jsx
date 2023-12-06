import React, { useState } from 'react';

const OwnerInput = (props) => {
  const [inputText, setInputText] = useState('');

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText('');
    }
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        className="border p-1 rounded-lg text-black focus:outline-none focus:shadow-outline"
        placeholder="Enter Wallet Address"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="bg-[#12ff80] hover:bg-[#0dae58] text-white font-bold p-1 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        onClick={() => {
          props.addList(inputText);
          setInputText('');
        }}
      >
        + Add New Owner
      </button>
    </div>
  );
};

export default OwnerInput;
