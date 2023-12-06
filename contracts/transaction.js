import { createTransaction, signTransaction } from 'arweavekit/transaction'
import { readFileSync } from 'fs';

const key = JSON.parse(readFileSync('./wallet.json').toString());

const transaction = await createTransaction({ data: "Verify Swiftify" });
console.log(transaction)
const signedTransaction = await signTransaction({
    createdTransaction: transaction,
    key,
    environment: 'mainnet',
});

console.log(signedTransaction)