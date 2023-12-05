import { writeContract } from "arweavekit/contract"
import deployment from "./deployment.json" assert { type: "json" }
import fs from 'fs'
import { ENV } from "../env.js"
import { createWallet } from 'arweavekit/wallet'

const wallet = await createWallet({ environment: "mainnet" });



const CNT_TX_ID = deployment.contractAddr
const envr = ENV === "DEV" ? "testnet" : "mainnet"
const username = ["lucifer", "john", "megabyte"]
const filePath = ["test.json", "folder/one.txt", "file.jpeg", "run.js"]
const owners = ["Ra4v8HF0injoBO7rjbujkRJ3HzVmXfynrrOs_QN62t4", wallet.walletAddress]

const falseOwner = ["c4BqumMcUn6bEcCq2KO29BFc5EVTgtRlv4R2NKiQZ1Q"]

const tx1 = await writeContract({
    environment: envr,
    contractTxId: CNT_TX_ID,
    wallet: wallet.key,
    options: {
        function: "createOwners",
        username: username[0],
        owners: owners
    },
    cacheOptions: {
        inMemory: true
    }
})

console.info("Create Owners ", tx1.state)

console.log("==========================================================")
const tx2 = await writeContract({
    environment: envr,
    contractTxId: CNT_TX_ID,
    wallet: wallet.key,
    options: {
        function: "addOrUpdateFiles",
        username: username[0],
        data: [{
            filePath: filePath[0],
            txnHash: "0xa"
        }]
    },
    cacheOptions: {
        inMemory: true
    }
})

console.info("Add filess ", tx2.state)
console.log("==========================================================")

const tx3 = await writeContract({
    environment: envr,
    contractTxId: CNT_TX_ID,
    wallet: wallet.key,
    options: {
        function: "modifyOwners",
        username: username[0],
        owners: owners
    },
    cacheOptions: {
        inMemory: true
    }
})

console.info("Add filess ", tx3.state)
console.log("==========================================================")
/*
 
   _                                                   
  | |_ _ __ _   _  ___    _____      ___ __   ___ _ __ 
  | __| '__| | | |/ _ \  / _ \ \ /\ / / '_ \ / _ \ '__|
  | |_| |  | |_| |  __/ | (_) \ V  V /| | | |  __/ |   
   \__|_|   \__,_|\___|  \___/ \_/\_/ |_| |_|\___|_|   
                                                       
 
*/
// const viewResult5 = await writeContract({
//     eenvironment: envr,
//     contractTxId: CNT_TX_ID,
//     wallet: wallet.key,
//     options: {
//         function: "isOwner",
//         username: username[0]
//     },
//     cacheOptions: {
//         inMemory: true
//     }
// })

// console.log("🚀 isOwner true ran successfully ✅ ✅.....", viewResult5.viewContract.result)

// /*
 
//     __       _                                          
//    / _| __ _| |___  ___    _____      ___ __   ___ _ __ 
//   | |_ / _` | / __|/ _ \  / _ \ \ /\ / / '_ \ / _ \ '__|
//   |  _| (_| | \__ \  __/ | (_) \ V  V /| | | |  __/ |   
//   |_|  \__,_|_|___/\___|  \___/ \_/\_/ |_| |_|\___|_|   
                                                        
 
// */
// const viewResult6 = await writeContract({
//     environment: envr,
//     contractTxId: CNT_TX_ID,
//     wallet: wallet.key,
//     options: {
//         function: "isOwner",
//         username: username[1]
//     },
//     cacheOptions: {
//         inMemory: true
//     }
// })

// console.log("🚀 isOwner flase ran successfully ✅ ✅.....", viewResult6.viewContract.result)