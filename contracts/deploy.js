import { createContract } from 'arweavekit/contract'
import fs from "fs"
import { ENV } from "../env.js"

const w = JSON.parse(fs.readFileSync("./contracts/wallet.json", "utf8"))
const src = fs.readFileSync("./contracts/swiftify.js", "utf8")
const istate = fs.readFileSync("./contracts/state.json", "utf8")
const envr = ENV === "DEV" ? "local" : "mainnet"

console.log("🚀 Contract deployment started ⏰ ⏰.....")

const contract = await createContract({
    wallet: w,
    contractSource: src,
    environment: "testnet",
    initialState: istate,
});

fs.writeFileSync("./contracts/deployment.json", JSON.stringify({ contractAddr: contract.contractTxId, network: "testnet" }), "utf8")
console.log("🚀 Contract deployed ✅ ✅.....", contract.contractTxId)