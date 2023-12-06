"use client";

import { WebIrys } from "@irys/sdk";
import {getData} from "@/sdk/s3";
import {encrypt,decryptFile} from "@/sdk/litP"
import deployment from "@/contracts/deployment.json" assert { type: "json" }
import { writeContract } from "arweavekit/contract"
import React,{ useState } from "react";
import { createWallet } from 'arweavekit/wallet'





const Page = () => {
    const environment = "mainnet";

    const [decryptedFile, setDecryptedFile] = useState(null);

    const getWebIrys = async () => {
        const arconnect = window.arweaveWallet;
        await arconnect.connect(["ACCESS_ADDRESS", "ACCESS_PUBLIC_KEY", "SIGN_TRANSACTION", "SIGNATURE"]);
        const webIrys = new WebIrys({ url: "https://node1.irys.xyz", token: "arweave", wallet: { provider: arconnect } });
        await webIrys.ready();
     
        return webIrys;
    };
    
    const fundNode = async () => {
        const webIrys = await getWebIrys();
        try {
            const fundTx = await webIrys.fund(webIrys.utils.toAtomic(0.07));
            console.log(`Successfully funded ${webIrys.utils.fromAtomic(fundTx.quantity)} ${webIrys.token}`);
        } catch (e) {
            console.log("Error uploading data ", e);
        }
    };

    const uploadData = async (folderData, size) => {
        const webIrys = await getWebIrys();
        try {
            const bal = await webIrys.getLoadedBalance();
            console.log(`Node balance (atomic units) = ${bal}`);
            const priceAtomic = await webIrys.utils.fromAtomic(size);
            console.log("Required tokens",priceAtomic)
            const receipt = await webIrys.uploadFolder(folderData);
            console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
            console.log(receipt)
            return receipt.manifestId
        } catch (e) {
            console.log("Error uploading data ", e);
        }
    };

    const handleUpload = async () => {
        const wallet = await createWallet({ environment: "mainnet" });
        const username = "test8"
        const walletAddress =[ "Ra4v8HF0injoBO7rjbujkRJ3HzVmXfynrrOs_QN62t4","c4BqumMcUn6bEcCq2KO29BFc5EVTgtRlv4R2NKiQZ1Q",wallet.walletAddress]

        // add owners
        console.log(
            await writeContract({
            environment,
            contractTxId: deployment.contractAddr,
            wallet: wallet.key,
            options: {
                function: "createOwners",
                username,
                owners: walletAddress
            }
        })
        )

        // get data from s3
        const {uploadArray,bucketInfo} = await getData()

        // // Encrypt data
        const encryptedFileArray = await Promise.all(
            uploadArray.map(file => {
                return encrypt(file,username,walletAddress[1])
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
        const res = await fetch(`https://arweave.net/${response.state.data.files[username]["eth_logo.png"]}`);
			const blob = await res.blob();
        const temp = new File([blob],"test")
        console.log(temp)
        const newFile= await decryptFile({file: temp})
        setDecryptedFile(newFile)
        // if(!file) throw "No file found"



        // Update the smart contract
        
/*
 
                           _       _                                       _                  _   
           _   _ _ __   __| | __ _| |_ ___    ___  _ __     ___ ___  _ __ | |_ _ __ __ _  ___| |_ 
          | | | | '_ \ / _` |/ _` | __/ _ \  / _ \| '_ \   / __/ _ \| '_ \| __| '__/ _` |/ __| __|
          | |_| | |_) | (_| | (_| | ||  __/ | (_) | | | | | (_| (_) | | | | |_| | | (_| | (__| |_ 
           \__,_| .__/ \__,_|\__,_|\__\___|  \___/|_| |_|  \___\___/|_| |_|\__|_|  \__,_|\___|\__|
                |_|                                                                               
 
*/
    }
  return (
    <div>
        tst
        <h1>Test Page</h1>
        <button
        className="bg-blue-500 rounded-full text-white px-6 py-3"
        onClick={handleUpload}
      >
        Upload
      </button>
      {decryptedFile ? (
				<a
					href={URL.createObjectURL(decryptedFile)}
					alt={decryptedFile.name}
					className='bg-blue-500 rounded-full text-white px-6 py-3'
				/>
			) : (
				"Please decrypt"
			)}
    </div>
  )
}

export default Page