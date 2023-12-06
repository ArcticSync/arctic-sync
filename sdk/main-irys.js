import { WebIrys } from "@irys/sdk";


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

export const uploadData = async (folderData, size) => {
    const webIrys = await getWebIrys();
    try {
        const bal = await webIrys.getLoadedBalance();
        console.log(`Node balance (atomic units) = ${bal}`);
        const priceAtomic = await webIrys.utils.fromAtomic(size);
        console.log("Required tokens", priceAtomic)
        const receipt = await webIrys.uploadFolder(folderData);
        console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
        console.log(receipt)
        return receipt.manifestId
    } catch (e) {
        console.log("Error uploading data ", e);
    }
};