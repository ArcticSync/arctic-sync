import { LitNodeClient, checkAndSignAuthMessage, encryptFileAndZipWithMetadata, decryptZipFileWithMetadata } from "@lit-protocol/lit-node-client";

const litNodeClient = new LitNodeClient({
    litNetwork: 'cayenne',
    alertWhenUnauthorized: false,
});



export async function encrypt(file, username, walletAddress) {
    await litNodeClient.connect();
    const accessControlConditions = [
        {
            contractAddress: "ipfs://bafkreidykldygoenck7oacifmt35lbwrulqq7ltel2rmjwj6zerou4th3i",
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

    const encryptedFile = new File([res], file.name, {
        lastModified: file.lastModified,
        type: file.ContentType
    });

    return encryptedFile;
}


export const decryptFile = async ({ file }) => {
    const authSig = await checkAndSignAuthMessage({ chain: "ethereum" })
    try {
        console.log("##########", "here", file)
        const res = await decryptZipFileWithMetadata({
            authSig,
            litNodeClient,
            file
        });
        console.log(res)
        if (!res) {
            return null;
        }
        console.log(res);
        const { decryptedFile, metadata } = res;
        return { decryptedFile, metadata };
    } catch (error) {
        console.log(error);
        return null;
    }
};