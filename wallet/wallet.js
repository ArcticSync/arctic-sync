import { createWallet } from 'arweavekit/wallet'

const getOrCreateWallet = async () => {
    const storedWallet = localStorage.getItem('myWallet');
  
    if (storedWallet) {
      return JSON.parse(storedWallet);
    } else {
      const wallet = await createWallet({
        seedPhrase: true,
        environment: 'local',
      });
      localStorage.setItem('myWallet', JSON.stringify(wallet));
      return wallet;
    }
  };
  const main = async () => {
    try {
      const wallet = await getOrCreateWallet();
      console.log('Wallet Data:', wallet);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  main();
  