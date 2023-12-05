import Irys from "@irys/sdk";
import fs from 'fs';

const getIrysArweave = async () => {
    const url = "https://devnet.irys.xyz";
    const token = "arweave";
    const key = JSON.parse(fs.readFileSync("wallet.json").toString());

    const irys = new Irys({
        url, // URL of the node you want to connect to
        token, // Token used for payment and signing
        key, // Arweave wallet
        config: {
            providerUrl: "https://arweave.net:443"
        }
    });
    return irys;
};

const fundNode = async () => {
    const irys = await getIrysArweave();
    try {
        const fundTx = await irys.fund(irys.utils.toAtomic(0.01));
        console.log(`Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${irys.token}`);
    } catch (e) {
        console.log("Error uploading data ", e);
    }
};

const checkPrice = async () => {
    const irys = await getIrysArweave();

    const numBytes = 141283826; // Number of bytes to check
    const priceAtomic = await irys.getPrice(numBytes);

    // Convert from atomic units to standard units
    const priceConverted = irys.utils.fromAtomic(numBytes);

    console.log(`Uploading ${numBytes} bytes costs ${priceConverted}`);
};
await checkPrice();

const irys = await getIrysArweave()

console.log(await irys.upload('./output.json'))

