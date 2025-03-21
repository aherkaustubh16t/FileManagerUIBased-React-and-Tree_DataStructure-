import React, { useState } from "react";

const FileTree = ({ node, onAddFile, onAddFolder, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="ml-4">
      <div className="flex items-center space-x-2">
        <span
          className="cursor-pointer font-bold"
          onClick={() => {
            if (node.type === "file") {
              setShowContent(!showContent);
            } else {
              setExpanded(!expanded);
            }
          }}
        >
          {node.type === "folder" ? "📁" : "📄"} {node.name}
        </span>
        <button
          className="text-red-500 text-xs"
          onClick={() => onDelete(node.name)}
        >
          ❌ Delete
        </button>
      </div>

      {showContent && node.type === "file" && (
        <div className="ml-4 p-2 border rounded bg-gray-100 mt-1">
          <h4 className="font-bold">File Content:</h4>
          <p>{node.content || "Empty File"}</p>
        </div>
      )}

      {expanded &&
        node.children &&
        node.children.map((child, index) => (
          <FileTree
            key={index}
            node={child}
            onAddFile={onAddFile}
            onAddFolder={onAddFolder}
            onDelete={onDelete}
          />
        ))}

      {node.type === "folder" && (
        <div className="flex space-x-2 mt-1">
          <button
            className="text-blue-500 text-sm"
            onClick={() => onAddFile(node.name)}
          >
            📄 Add File
          </button>
          <button
            className="text-green-500 text-sm"
            onClick={() => onAddFolder(node.name)}
          >
            📁 Add Folder
          </button>
        </div>
      )}
    </div>
  );
};

export default FileTree;
