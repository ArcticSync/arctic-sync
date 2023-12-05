import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';

const OwnerList = (props) => {
  return (
    <li className="flex items-center justify-between p-2 bg-white border border-gray-300 rounded shadow-md mb-2">
      <span className="text-gray-700">{props.item}</span>
      <button className="text-red-500 hover:text-red-700">
        <MdDeleteOutline className="text-lg" />
      </button>
    </li>
  );
};

export default OwnerList;
