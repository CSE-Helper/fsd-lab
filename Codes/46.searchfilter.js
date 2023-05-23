//SearchFilter.js
import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    filterItems(event.target.value);
  };

  const filterItems = (query) => {
    const filtered = filteredItems.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;


//App.js
import React from "react";
import SearchFilter from "./component/SearchFilter";

const App = () => {
  return (
    <div>
      <h1>Search Filter Example</h1>
      <SearchFilter />
    </div>
  );
};

export default App;
