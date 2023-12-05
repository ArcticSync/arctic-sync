"use client"
import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";
import "./styles.css";
import explorer from "./data/folderData"
import Dashboard from "../dashboard/components/SideBar";
import Navbar from "../header/Navbar";

export default function Files() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="Files">
      <Navbar />
      <Dashboard />
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}