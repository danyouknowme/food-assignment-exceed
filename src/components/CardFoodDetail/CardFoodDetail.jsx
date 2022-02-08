import React from 'react';
import './card-food-detail.css';
import { MdCheckBox } from 'react-icons/md';

const CardFoodDetail = ({ meal, ingredients, measure }) => {
  return (
    <div className='card-food-detail-container'>
      <img src={meal.img} alt='food' />
      <div className='details'>
        <h1>{meal.name}</h1>
        <h4>Ingredients</h4>
        <div className='ingredients'>
          {ingredients.map((ingredient, index) => (
            <span key={index}>
              <MdCheckBox />
              {measure[index]} {ingredient}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardFoodDetail;
