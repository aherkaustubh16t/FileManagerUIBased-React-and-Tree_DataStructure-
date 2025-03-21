import React, { useState } from "react";
import FileTree from "./components/FileTree";
import SearchBar from "./components/SearchBar";
import Modal from "./components/Modal";
import { fileSystem } from "./utils/fileSystem";
import { trie } from "./utils/trie";

const App = () => {
  const [, forceUpdate] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFolder, setCurrentFolder] = useState("");
  const [modalType, setModalType] = useState("file");

  const addFile = (parentPath) => {
    setCurrentFolder(parentPath);
    setModalType("file");
    setModalOpen(true);
  };

  const addFolder = (parentPath) => {
    setCurrentFolder(parentPath);
    setModalType("folder");
    setModalOpen(true);
  };

  const saveNode = (name, content) => {
    fileSystem.addNode(currentFolder, name, modalType, content);
    trie.insert(name);
    setModalOpen(false);
    forceUpdate((prev) => prev + 1);
  };

  const deleteNode = (name) => {
    fileSystem.deleteNode("Root", name);
    forceUpdate((prev) => prev + 1);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📂 File Manager</h1>
      <SearchBar />
      <FileTree
        node={fileSystem.root}
        onAddFile={addFile}
        onAddFolder={addFolder}
        onDelete={deleteNode}
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={saveNode}
        type={modalType}
      />
    </div>
  );
};

export default App;
