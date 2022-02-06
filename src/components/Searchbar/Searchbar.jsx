import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchbar.css';

const SeachBar = ({ searchValue, setSearchValue, onSubmit }) => {
  return (
    <div className='search-container'>
      <div className='search-wrapper'>
        <FaSearch />
        <input
          type='text'
          placeholder='Search for Meal...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={onSubmit}>Search</button>
      </div>
    </div>
  );
};

export default SeachBar;
