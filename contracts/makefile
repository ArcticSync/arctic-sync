mem write --function-id  35609815-7e5f-82c3-30f6-dae9324d5c51 --inputs '{
    "function": "addOrUpdateFiles",
    "username": "lucifer",
    "data": [{
        "filePath": "test.json",
        "txnHash": "0xa34"
    }]
}' --testnet

mem deploy --src ./contracts/swiftify.js --init-state ./contracts/state.json  --testnet 

mem write --function-id 35609815-7e5f-82c3-30f6-dae9324d5c51 --inputs '{
    "function": "createOwners",
    "username": "lucifer",
    "owners": ["Ra4v8HF0injoBO7rjbujkRJ3HzVmXfynrrOs_QN62t4","@test"]
}' --testnet