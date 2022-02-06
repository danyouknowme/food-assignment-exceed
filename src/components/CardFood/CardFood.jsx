import React from 'react';
import './cardfood.css';

const CardFood = ({ name, img }) => {
  return (
    <div className='card-food-container'>
      <img src={img} alt='food' />
      <h4>{name}</h4>
    </div>
  );
};

export default CardFood;
