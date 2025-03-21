class FileNode {
  constructor(name, type = "folder", content = "") {
    this.name = name;
    this.type = type; // 'folder' or 'file'
    this.children = type === "folder" ? [] : null;
    this.content = content; // Stores content for files
  }
}

class FileSystem {
  constructor() {
    this.root = new FileNode("Root");
  }

  addNode(parentPath, name, type = "folder", content = "") {
    const parent = this.findNode(this.root, parentPath);
    if (parent && parent.type === "folder") {
      parent.children.push(new FileNode(name, type, content));
    }
  }

  deleteNode(parentPath, name) {
    const parent = this.findNode(this.root, parentPath);
    if (parent && parent.children) {
      parent.children = parent.children.filter((child) => child.name !== name);
    }
  }

  findNode(node, path) {
    if (node.name === path) return node;
    if (node.children) {
      for (let child of node.children) {
        const found = this.findNode(child, path);
        if (found) return found;
      }
    }
    return null;
  }
}

export const fileSystem = new FileSystem();
