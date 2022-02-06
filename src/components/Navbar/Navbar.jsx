import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <Link to='/recipes'>
        <h3>Cooking master</h3>
      </Link>
    </div>
  );
};

export default Navbar;
