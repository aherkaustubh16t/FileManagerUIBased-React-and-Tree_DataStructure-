import React, { useState } from "react";
import { trie } from "../utils/trie";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(trie.search(value));
  };

  return (
    <div className="p-2">
      <input
        type="text"
        placeholder="Search files..."
        className="border p-2 w-full"
        value={query}
        onChange={handleSearch}
      />
      {suggestions.length > 0 && (
        <ul className="bg-white border mt-1">
          {suggestions.map((item, index) => (
            <li key={index} className="p-2 border-b">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
