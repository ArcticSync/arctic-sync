"use client";

import { useMyContext } from "../context/context";
import Navbar from "../header/Navbar";
import toast from 'react-hot-toast';
import {getData} from "@/sdk/s3";
import {encrypt} from "@/sdk/litP"
import deployment from "@/contracts/deployment.json" assert { type: "json" }
import { writeContract } from "arweavekit/contract"
import { uploadData } from "@/sdk/main-irys";



const Upload = () => {
    const { username, setUsername, owners, setOwners, wallet} = useMyContext()

    const handleOnClick = async () => {
        console.log(owners,username)
        toast.loading("Loading..",{id:"swiftify"})
        // add owners
        const environment = "mainnet"
        console.log(
            await writeContract({
            environment,
            contractTxId: deployment.contractAddr,
            wallet: wallet.key,
            options: {
                function: "createOwners",
                username,
                owners
            }
        })
        )

        // get data from s3
        const {uploadArray,bucketInfo} = await getData()

        // // Encrypt data
        const encryptedFileArray = await Promise.all(
            uploadArray.map(file => {
                return encrypt(file,username,wallet.walletAddress)
            })
        )
        console.log("==================================",encryptedFileArray)
        // Upload data
        const manifestId = await uploadData(encryptedFileArray, bucketInfo.totalSize) 
        // const manifestId = "GWkZzGrXYl3uThokleX68DXzxWyZmyNOfmkySFV_8nM"
        let folder = []
        while(true){
            try{
                folder = await(await fetch(`https://node1.irys.xyz/${manifestId}`)).json()  
                break;
            } catch(e) {
                console.log(e)
            }            

        }
        console.log(folder)

        const paths = folder.paths;
        const data = []
        for (const key in paths) {
            data.push({
                filePath: key,
                txnHash: paths[key].id
            })
        }
        const response = await writeContract({
            environment,
            contractTxId: deployment.contractAddr,
            wallet: wallet.key,
            options: {
                function: "addOrUpdateFiles",
                username: username,
                data
            }
        })
        console.log(response)
        console.log(">>>>>>>>>>>",response.state.data)
        toast.dismiss("swiftify")
        toast.success("Migrated to Arweave")
    }

  return (
    <>
    <Navbar/>
    <div className='flex min-h-[80vh] flex-col items-center justify-center'>
          <h2 className="font-bold text-4xl font-sans mb-4 flex gap-3 justify-center">
            Migrate to <span className="text-[#12ff80]">Arweave</span> 
          </h2>
          <div className='bg-[#1c1c1c] w-1/3 flex flex-col items-center justify-center p-4 py-8 border-b-8 border-[#12ff80] rounded-xl'>
              <div className='flex flex-col'>
                <label className="text-md text-[] my-2 text-[#12ff80]">Username</label>
                <input
                  type="text"
                  placeholder='Enter Username'
                //   value={username}
                  className='p-2 border h-8 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
                  onChange={(e) => setUsername(e.target.value)}                
                />
              </div>
              <div className='flex flex-col'>
                <label className="text-md text-[] my-2 text-[#12ff80]">Owners</label>
                <input
                  type="text"
                  placeholder='Enter Owners'
                //   value={username}
                  className='p-2 border h-8 rounded-md focus:outline-none focus:shadow-outline-blue text-black'
                  onChange={(e) => setOwners([...owners, ...(e.target.value.split(','))])}                
                />
              </div>
              <button onClick={handleOnClick} className="bg-[#12ff80] text-black my-5 px-5 py-3 rounded-xl">
                Migrate
              </button>
            </div>
    </div>
    </>
  )
}

export default Upload