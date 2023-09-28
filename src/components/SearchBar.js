import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <input
        className='search-bar'
        type='text'
        placeholder='Search recipes by title...'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
