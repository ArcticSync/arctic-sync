const verify = async (username, walletAddress) => {
    // const signatureUrl = `https://ar.molecule.sh/ar-auth/${publicKey}/${message}/${signature}`;
    const contractState = `https://dre-1.warp.cc/contract?id=OYT53hhfAAoJI7mevZ4AWDSIuUXAgt9dtftuAgkHKyk`
    try {
        const response = await fetch(contractState).then((res) => res.json());
        const owners = response.data.owners[username]

        // const signatureRes = await fetch(signatureUrl).then((res) => res.json());

        if (owners.indexOf(walletAddress) !== -1) return true
    } catch (e) {
        console.log(e);
    }
    return false;
};