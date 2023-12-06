import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { viewResult2 } from "@/contracts/testRead.script";

function Folder({ handleInsertNode = () => {}, explorer, isRoot = false }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
    position: { x: 0, y: 0 },
  });
  const [filesData, setFilesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await viewResult2();

            console.log("🚀 GetOwners ran successfully ✅ ✅.....", result);

            if (result && result["lucifer"]) {
                console.log("Lucifer data found:", result["lucifer"]);
                setFilesData(result["lucifer"]);
            } else {
                console.warn("No data found for 'lucifer'.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error or set an error state
        }
    };

    // Call the fetchData function
    fetchData();
}, []); 

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
      position: { x: e.clientX, y: e.clientY },
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const contextMenuHandler = (e) => {
    e.preventDefault();
    setShowInput({
      ...showInput,
      position: { x: e.clientX, y: e.clientY },
    });
  };

  return (
    <div className="m-20 mt-8 p-10 bg-[#1c1c1c]">
      <div
        onContextMenu={contextMenuHandler}
        onClick={() => setExpand(!expand)}
        className={`flex items-center folder cursor-pointer ${
          isRoot ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <button className="" onClick={async ()=>{await viewResult2()}}>Clicl</button>
        <div className="flex flex-col justify-center items-center mr-2">
          <Image
            src={isRoot ? "/arrow.png" : "/mac-folder.png"}
            width={isRoot ? 20 : 33}
            height={isRoot ? 20 : 20}
          />
          <span className="text-gray-600 text-xs">{explorer.name}</span>
        </div>
      </div>

      <div
        style={{ display: expand ? "flex" : "none", paddingLeft: 25 }}
        className="ml-6 flex flex-wrap"
      >
        {showInput.visible && (
          <div
            className="inputContainer"
            style={{
              position: "absolute",
              top: showInput.position.y,
              left: showInput.position.x,
            }}
          >
            <span className="mr-2">
              {showInput.isFolder ? (
                <Image src="/mac-folder.png" width="33" height="20" />
              ) : (
                <Image src="/mac-file.png" width="33" height="20" />
              )}
            </span>
            <input
              type="text"
              className="inputContainer__input border-none focus:outline-none"
              autoFocus
              onKeyDown={onAddFolder}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
            />
          </div>
        )}

        {explorer.items.map((exp) => (
          <Folder
            handleInsertNode={handleInsertNode}
            key={exp.id}
            explorer={exp}
          />
        ))}
      </div>
      <div>
            {/* Render your component based on filesData */}
            {filesData && (
                <div>
                    {/* Render your data here */}
                    {JSON.stringify(filesData)}
                </div>
            )}
        </div>
    </div>
  );
}

export default Folder;