📂 File Manager System
A UI-based **File Manager System** built using **React.js** and **Tailwind CSS**, implementing a **tree data structure** for efficient file and folder management.
🚀 Features
✅ Hierarchical Folder Structure – Uses a **Tree Data Structure** for organizing files and folders dynamically.
✅ Add, Rename, Delete Files & Folders – Manage files with an intuitive UI.
✅ Modal-Based Input System – Separate modals for **file creation** (with content) and **folder creation**.
✅ Recursive File Search – Search for files **with full directory path display**.
✅ Real-Time Updates – No page refresh needed, thanks to **React’s state management**.
✅ Optimized UI/UX – Designed using **Tailwind CSS** for a clean, responsive layout.
🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Data Structures:** Tree (File/Folder Hierarchy), Recursion (Search & Navigation)
- **State Management:** React useState
📦 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/file-manager-system.git
cd file-manager-system
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Run the Project
```sh
npm start
```
The project will be available at **http://localhost:3000**.
📝 Folder Structure
```
/src  
│── components/  
│   ├── FileTree.js        # Recursive File & Folder Explorer  
│   ├── Modal.js           # Pop-up modal for adding files/folders  
│   ├── SearchBar.js       # Search functionality  
│── utils/  
│   ├── fileSystem.js      # Tree Data Structure Implementation  
│   ├── trie.js            # Trie for Fast Search  
│── App.js                 # Main Component  
│── index.js               # Entry Point  
│── package.json           # Dependencies  
```
🛠 How It Works?
1️⃣ **Click 'Add File' or 'Add Folder'** to create a new entry.
2️⃣ **Enter the file name and content (if applicable).**
3️⃣ **Manage the hierarchy** – Delete, rename, or search for files easily.
4️⃣ **Search files** to find their exact path dynamically.
📌 To-Do & Future Enhancements
🔹 **Drag & Drop** – Implement file/folder drag-and-drop support.
🔹 **Save to Local Storage** – Persist file structure after refresh.
🔹 **File Preview & Editing** – Enhance file viewing/editing experience.
🔹 **Dark Mode UI** – Add a toggle for light/dark mode.
🛠 Contributing
We welcome contributions! If you'd like to improve this project, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added a new feature"`).
4. Push the branch (`git push origin feature-branch`).
5. Open a Pull Request.
📄 License
This project is open-source and available under the **MIT License**.
