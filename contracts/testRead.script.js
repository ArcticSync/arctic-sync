import { viewContractState } from "arweavekit/contract"
import deployment from "./deployment.json" assert { type: "json" }
import { ENV } from "../env.js"


const CNT_TX_ID = deployment.contractAddr
const envr = ENV === "DEV" ? "local" : "mainnet"
const username = ["lucifer", "john", "megabyte"]
const filePath = ["test.json", "folder/one.txt", "file.jpeg", "run.js"]

// /*

//               _                                       
//     __ _  ___| |_    _____      ___ __   ___ _ __ ___ 
//    / _` |/ _ \ __|  / _ \ \ /\ / / '_ \ / _ \ '__/ __|
//   | (_| |  __/ |_  | (_) \ V  V /| | | |  __/ |  \__ \
//    \__, |\___|\__|  \___/ \_/\_/ |_| |_|\___|_|  |___/
//    |___/                                              

// */
// const viewResult = await viewContractState({
//     environment: "testnet",
//     contractTxId: CNT_TX_ID,
//     options: {
//         function: "getOwners",
//         username: username[0]
//     },
//     cacheOptions: {
//         inMemory: true
//     }
// })

// console.log("🚀 GetOwners ran successfully ✅ ✅.....", viewResult.viewContract.result)

// /*

//    _            _                _      __ _ _           
//   | |_ ___  ___| |_    __ _  ___| |_   / _(_) | ___  ___ 
//   | __/ _ \/ __| __|  / _` |/ _ \ __| | |_| | |/ _ \/ __|
//   | ||  __/\__ \ |_  | (_| |  __/ |_  |  _| | |  __/\__ \
//    \__\___||___/\__|  \__, |\___|\__| |_| |_|_|\___||___/
//                       |___/                              

// */
// const viewResult2 = await viewContractState({
//     environment: "testnet",
//     contractTxId: CNT_TX_ID,
//     options: {
//         function: "getFilesHashThroughUsername",
//         username: username[0],
//     },
//     cacheOptions: {
//         inMemory: true
//     }
// })

// console.log("🚀 GetOwners ran successfully ✅ ✅.....", viewResult2.viewContract.result)

// /*

//               _         _             _         __ _ _      
//     __ _  ___| |_   ___(_)_ __   __ _| | ___   / _(_) | ___ 
//    / _` |/ _ \ __| / __| | '_ \ / _` | |/ _ \ | |_| | |/ _ \
//   | (_| |  __/ |_  \__ \ | | | | (_| | |  __/ |  _| | |  __/
//    \__, |\___|\__| |___/_|_| |_|\__, |_|\___| |_| |_|_|\___|
//    |___/                        |___/                       

// */
// const viewResult3 = await viewContractState({
//     environment: "testnet",
//     contractTxId: CNT_TX_ID,
//     options: {
//         function: "getFileByFilePath",
//         username: username[0],
//         filePath: filePath[1]
//     },
//     cacheOptions: {
//         inMemory: true
//     }
// })

// console.log("🚀 getFileByFilePath ran successfully ✅ ✅.....", viewResult3.viewContract.result)

// /*

//     __       _             ____ _               _    
//    / _| __ _| |___  ___   / ___| |__   ___  ___| | __
//   | |_ / _` | / __|/ _ \ | |   | '_ \ / _ \/ __| |/ /
//   |  _| (_| | \__ \  __/ | |___| | | |  __/ (__|   < 
//   |_|  \__,_|_|___/\___|  \____|_| |_|\___|\___|_|\_\


// */
// const viewResult4 = await viewContractState({
//     environment: "testnet",
//     contractTxId: CNT_TX_ID,
//     options: {
//         function: "isUsername",
//         username: username[1]
//     },
//     cacheOptions: {
//         inMemory: true
//     }
// })

// console.log("🚀 isUsername false ran successfully ✅ ✅.....", viewResult4.viewContract.result)

// /*

//    _                          _               _    
//   | |_ _ __ _   _  ___    ___| |__   ___  ___| | __
//   | __| '__| | | |/ _ \  / __| '_ \ / _ \/ __| |/ /
//   | |_| |  | |_| |  __/ | (__| | | |  __/ (__|   < 
//    \__|_|   \__,_|\___|  \___|_| |_|\___|\___|_|\_\


// */
// const viewResult7 = await viewContractState({
//     environment: "testnet",
//     contractTxId: CNT_TX_ID,
//     options: {
//         function: "isUsername",
//         username: username[2]
//     },
//     cacheOptions: {
//         inMemory: true
//     }
// })

// console.log("🚀 isUsername true ran successfully ✅ ✅.....", viewResult7.viewContract.result)

/*
 
   _                                                   
  | |_ _ __ _   _  ___    _____      ___ __   ___ _ __ 
  | __| '__| | | |/ _ \  / _ \ \ /\ / / '_ \ / _ \ '__|
  | |_| |  | |_| |  __/ | (_) \ V  V /| | | |  __/ |   
   \__|_|   \__,_|\___|  \___/ \_/\_/ |_| |_|\___|_|   
                                                       
 
*/
const viewResult5 = await viewContractState({
    environment: "testnet",
    contractTxId: CNT_TX_ID,
    options: {
        function: "isOwner",
        username: username[0]
    },
    cacheOptions: {
        inMemory: true
    }
})

console.info("🚀 isOwner true ran successfully ✅ ✅.....")
console.info(viewResult5.viewContract.state.data)
console.log(viewResult5.viewContract.result)

/*
 
    __       _                                          
   / _| __ _| |___  ___    _____      ___ __   ___ _ __ 
  | |_ / _` | / __|/ _ \  / _ \ \ /\ / / '_ \ / _ \ '__|
  |  _| (_| | \__ \  __/ | (_) \ V  V /| | | |  __/ |   
  |_|  \__,_|_|___/\___|  \___/ \_/\_/ |_| |_|\___|_|   
                                                        
 
*/
const viewResult6 = await viewContractState({
    environment: "testnet",
    contractTxId: CNT_TX_ID,
    options: {
        function: "isOwner",
        username: username[1]
    },
    cacheOptions: {
        inMemory: true
    }
})

console.log("🚀 isOwner flase ran successfully ✅ ✅.....", viewResult6.viewContract.result)