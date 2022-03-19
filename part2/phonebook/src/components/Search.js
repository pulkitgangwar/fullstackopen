import React from "react";

const Search = ({ onSearchChange, search, handleSearch }) => {
  return (
    <input
      type="text"
      onChange={onSearchChange}
      onKeyUp={handleSearch}
      placeholder="search.."
      value={search}
    />
  );
};

export default Search;
