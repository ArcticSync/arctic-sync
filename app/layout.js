import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ArweaveWalletKit } from "arweave-wallet-kit";
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './context/context';

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600'] })

export const metadata = {
  title: 'ArcticSync',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ArweaveWalletKit>
        <ContextProvider>
          <body className={poppins.className}>
            {children}
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
          </body>
        </ContextProvider>
      </ArweaveWalletKit>
    </html>
  )
}
