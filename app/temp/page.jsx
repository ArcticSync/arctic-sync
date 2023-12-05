"use client";

import { WebIrys } from "@irys/sdk";
import {getData} from "@/sdk/s3";


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
        const {uploadArray,bucketInfo} = await getData()
        console.log(">>>>>>>>>>>>>>>>>>",uploadArray)
        // if(!file) throw "No file found"
        await uploadData(uploadArray, bucketInfo.totalSize) 
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