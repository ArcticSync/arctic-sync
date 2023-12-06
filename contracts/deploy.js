import { createContract } from 'arweavekit/contract'
import fs from "fs"


const w = JSON.parse(fs.readFileSync("./wallet.json", "utf8"))
const src = fs.readFileSync("./.js", "utf8")
const istate = fs.readFileSync("./state.json", "utf8")


console.log("🚀 Contract deployment started ⏰ ⏰.....")

const contract = await createContract({
    wallet: w,
    contractSource: src,
    environment: "mainnet",
    initialState: istate,
});

fs.writeFileSync("./deployment.json", JSON.stringify({ contractAddr: contract.contractTxId, network: "testnet" }), "utf8")
console.log("🚀 Contract deployed ✅ ✅.....", contract.contractTxId)