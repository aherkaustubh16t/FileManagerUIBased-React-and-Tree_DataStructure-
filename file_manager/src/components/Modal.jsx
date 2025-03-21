import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSave, type }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (name.trim()) {
      onSave(name, type === "file" ? content : "");
      setName("");
      setContent("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-2">
          {type === "file" ? "Create File" : "Create Folder"}
        </h2>
        <input
          type="text"
          placeholder={type === "file" ? "File name" : "Folder name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        {type === "file" && (
          <textarea
            placeholder="Enter file content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full h-24 mb-2"
          />
        )}
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
