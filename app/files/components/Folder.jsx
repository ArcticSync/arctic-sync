import { useState } from "react";
import Image from "next/image";

function Folder({ handleInsertNode = () => {}, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
    position: { x: 0, y: 0 },
  });

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
    <div className="m-20 mt-8">
      <div
        onContextMenu={contextMenuHandler}
        onClick={() => setExpand(!expand)}
        className="flex items-center folder cursor-pointer"
      >
        <div className="flex flex-col">
          <div className="mr-2">
            <Image src="/mac-folder.png" width={33} height={20} />
          </div>
          <span className="text-gray-600">{explorer.name}</span>
        </div>
        <div className="ml-auto flex space-x-2">
          <button
            onClick={(e) => handleNewFolder(e, true)}
            className="hover:text-blue-600"
          >
            📁
          </button>
          <button
            onClick={(e) => handleNewFolder(e, false)}
            className="hover:text-blue-600"
          >
            📄
          </button>
        </div>
      </div>

      <div
        style={{ display: expand ? "block" : "none", paddingLeft: 25 }}
        className="ml-6"
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
            <span className="mr-2">{showInput.isFolder ? "📁" : "📄"}</span>
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
    </div>
  );
}

export default Folder;
