import { LitNodeClient, uint8ArrayToBlob } from "@lit-protocol/lit-node-client";

const client = new LitNodeClient({
    litNetwork: 'cayenne',
});

class Lit {
    constructor() {
        this.litNodeClient = null;
    }

    async connect() {
        await client.connect();
        this.litNodeClient = client;
    }
}

const litInstance = new Lit();
export default litInstance;
