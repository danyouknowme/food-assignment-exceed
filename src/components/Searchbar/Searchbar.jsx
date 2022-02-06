import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchbar.css';

const SeachBar = () => {
  const [meal, setMeal] = useState('');

  return (
    <div className='search-container'>
      <div className='search-wrapper'>
        <FaSearch />
        <input
          type='text'
          placeholder='Search for Meal...'
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SeachBar;
