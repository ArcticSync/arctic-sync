

export const viewContractState = async () => {
    console.log("called")
    const viewResult2 = await viewContractState({
        environment: "mainnet",
        contractTxId: "OYT53hhfAAoJI7mevZ4AWDSIuUXAgt9dtftuAgkHKyk",
        options: {
            function: "getFilesHashThroughUsername",
            username: username[0],
        },
        cacheOptions: {
            inMemory: true
        }
    })
    
console.log("🚀 GetOwners ran successfully ✅ ✅.....", viewResult2.viewContract.state.data) 
return {result:viewResult2}
  };