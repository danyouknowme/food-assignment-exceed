import React, { useEffect, useState } from 'react';
import './card-food-detail.css';
import { MdCheckBox } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { getMealFromId } from '../../service/food';

const CardFoodDetail = () => {
  const { recipeId } = useParams();
  const [meal, setMeal] = useState({
    name: '',
    img: '',
  });
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);

  useEffect(() => {
    getMealFromId(recipeId, setMeal, setIngredients, setMeasure);
  }, []);

  return (
    <div className='card-food-detail-container'>
      <img src={meal.img} alt='food' />
      <div className='details'>
        <h1>{meal.name}</h1>
        <h4>Ingredients</h4>
        <div className='ingredients'>
          {ingredients.map((ingredient, index) => (
            <span>
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
