"use client";
import Navbar from "@/app/header/Navbar"
import Sidebar from "../components/SideBar"
import { viewContractState } from "arweavekit/contract"
import toast from 'react-hot-toast';



import deployment from "@/contracts/deployment.json" assert { type: "json" }
import { useMyContext } from "@/app/context/context";
import { useState } from "react";
import { decryptFile } from "@/sdk/litP";

const CNT_TX_ID = deployment.contractAddr

const Page = () => {
    const [files, setFiles] = useState([]);
    const [decryptedFile, setDecryptedFile] = useState(null);

    const {username} = useMyContext()
    const test = async () => {
            const res = await viewContractState({
            environment: "mainnet",
            contractTxId: CNT_TX_ID,
            options: {
                function: "getFilesHashThroughUsername",
                data: {username: username},
            }
        })
        console.log(res?.viewContract?.state?.data?.files["pratham"])
        setFiles(res?.viewContract?.state?.data?.files[username])
    }

    const handleClick = async (fileHash) => {
        toast.loading("Loading",{id:"test"})
         const res = await fetch(`https://arweave.net/${fileHash}`);
			const blob = await res.blob();
        const temp = new File([blob],"test")
        console.log(temp)
        const newFile= await decryptFile({file: temp})
        setDecryptedFile(newFile)
        window.location.href = URL.createObjectURL(newFile)
        toast.dismiss("test")
    }
    // test()

  return (
    <div>
        <Navbar />
      <Sidebar />
      <div className="ml-56 mt-10">
      <button onClick={test}>
        Get files
      </button>
        <section className="flex space-x-10">
            {Object.keys(files).map(file => (
                <button key={file} className="p-5 h-10 bg-slate-200 rounded-md text-black flex justify-center items-center" onClick={() => {handleClick(files[file])}}>{file}</button>
            ))}
        </section>
      </div>
    </div>
  )
}

export default Page