import { LitNodeClient, checkAndSignAuthMessage, encryptFileAndZipWithMetadata, decryptZipFileWithMetadata } from "@lit-protocol/lit-node-client";

const litNodeClient = new LitNodeClient({
    litNetwork: 'cayenne',
    alertWhenUnauthorized: false,
});



export async function encrypt(file, username, walletAddress) {
    await litNodeClient.connect();
    const accessControlConditions = [
        {
            contractAddress: "ipfs://QmSgpNorup2GC12mpBe9gY6gjs7tJoLg6pedxKxm5aTeTY",
            standardContractType: "LitAction",
            conditionType: "evmBasic",
            chain: "ethereum",
            method: "verify",
            parameters: [username, walletAddress],
            returnValueTest: {
                key: "",
                comparator: "=",
                value: "true",
            },
        },
    ];

    const authSig = await checkAndSignAuthMessage({ chain: "ethereum" })

    const res = await encryptFileAndZipWithMetadata(
        {
            unifiedAccessControlConditions: accessControlConditions,
            authSig,
            chain: "ethereum",
            file: file,
            litNodeClient,
            readme: "switify"
        },
    );
    console.log(res)
    const encryptedFile = new File([res], file.name, {
        lastModified: file.lastModified,
        type: file.ContentType
    });
    // encryptedFile.tags = [{ name: "Content-Type", value: file.ContentType }, { name: "App-Name", value: "swiftify" }, { name: "File-Path", value: key }]
    return encryptedFile;
}


export const decryptFile = async ({ file }) => {
    const authSig = await checkAndSignAuthMessage({ chain: "ethereum" })
    console.log(authSig)
    await litNodeClient.connect();
    try {

        const res = await decryptZipFileWithMetadata({
            authSig,
            litNodeClient,
            file
        });
        if (!res) {
            return null;
        }
        const blob = new Blob([res.decryptedFile])
        const decryptedFile = new File([blob], res.metadata.name, {
            type: res.metadata.type
        })
        console.log(decryptedFile)
        return decryptedFile
    } catch (error) {
        console.log(error);
        return null;
    }
};