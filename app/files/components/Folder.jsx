import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function Folder({ handleInsertNode = () => {}, explorer, isRoot = false }) {
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
    <div className="m-20 mt-8 p-10 bg-[#1c1c1c]">
      <div
        onContextMenu={contextMenuHandler}
        onClick={() => setExpand(!expand)}
        className={`flex items-center folder cursor-pointer ${
          isRoot ? "flex-row-reverse" : "flex-row"
        }`}
      >
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
    </div>
  );
}

export default Folder;
