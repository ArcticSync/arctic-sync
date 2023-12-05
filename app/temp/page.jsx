"use client";

import { WebIrys } from "@irys/sdk";
import {getData} from "@/sdk/s3";
import {encrypt,decryptFile} from "@/sdk/litP"


const page = async () => {
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
            const fundTx = await webIrys.fund(webIrys.utils.toAtomic(0.02));
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
        } catch (e) {
            console.log("Error uploading data ", e);
        }
    };

    const handleUpload = async () => {
        const username = "lucifer"
        const walletAddress = "Ra4v8HF0injoBO7rjbujkRJ3HzVmXfynrrOs_QN62t4"
        const {uploadArray,bucketInfo} = await getData()

        const encryptedFileArray = await Promise.all(
            uploadArray.map(file => {
                return encrypt(file,username,walletAddress)
            })
        )
        // https://node1.irys.xyz/1IUh8KylQEQYn9TrNIpah8I9XA9Q1UaXPa0PmxFX2CA
        // const res = await fetch(`https://arweave.net/w8S4uMyhU_VsjkuqPKLUV0NtKU8tiJMVKTCbCxxkKfU`);
		// 	const blob = await res.blob();
        // console.log(">>>>>>>>>>>>>>>>>>>>>",encryptedFileArray)
        // const temp = new File([blob],"test")
        // console.log(blob)
        // console.log(await decryptFile({file: temp}))
        // if(!file) throw "No file found"
        await uploadData(encryptedFileArray, bucketInfo.totalSize)   
        
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
        <h1>Test page</h1>
        <button
        className="bg-blue-500 rounded-full text-white px-6 py-3"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  )
}

export default page