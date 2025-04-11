import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <label>Search Expenses:</label>
      <input
        type="text"
        placeholder="Search by description or category"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;