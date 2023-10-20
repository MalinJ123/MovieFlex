
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div>
      <h3>Search function</h3>
      <input
        type="text"
        placeholder="Search by Title"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
