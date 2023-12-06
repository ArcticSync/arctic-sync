"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createWallet } from 'arweavekit/wallet';

const dataContext = createContext(null);

const useMyContext = () => {
  const context = useContext(dataContext)

  if (!context) {
    throw new Error(
      "dataContext should be used within a MyContext Provider"
    );
  }

  return context
}

const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState("pratham");
  const [wallet, setWallet] = useState(null);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const initializeWallet = async () => {
      const walletInstance = await createWallet({ environment: "mainnet" });
      setWallet(walletInstance);
      setOwners([walletInstance.walletAddress]);
    };

    initializeWallet();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <dataContext.Provider value={{ username, setUsername, wallet, owners, setOwners }}>
      {children}
    </dataContext.Provider>
  );
};

export { useMyContext, ContextProvider }