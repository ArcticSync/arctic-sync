import React from 'react';
import { CiWallet } from 'react-icons/ci';
import { useConnection, useActiveAddress } from 'arweave-wallet-kit';

const Button = ({ text }) => {
  const { connected, connect, disconnect } = useConnection();
  const address = useActiveAddress();

  return (
    <div className="flex items-center">
      <button
        onClick={connected ? disconnect : connect}
        className="relative w-[100px] h-[34px] rounded-md justify-center items-center gap-2.5 inline-flex bg-[#12ff80] hover:bg-[#0cb259] text-black font-semibold overflow-hidden font-poppins"
      >
        {connected ? 'Disconnect' : 'Connect'}
        <CiWallet />
      </button>
      {connected && address && (
        <div className="ml-4 flex items-center justify-center space-x-2">
          <div className="text-sm text-gray-600">Connected:</div>
          <div className="text-sm text-gray-800 font-semibold">{address}</div>
        </div>
      )}
    </div>
  );
};

export default Button;
