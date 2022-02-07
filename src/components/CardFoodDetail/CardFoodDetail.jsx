import React, { useEffect, useState } from 'react';
import './card-food-detail.css';
import { MdCheckBox } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { getMealFromId } from '../../service/food';

const CardFoodDetail = () => {
  const { recipeId } = useParams();
  const [meal, setMeal] = useState({ name: '', img: '' });
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);

  const onGetIngredients = (meal) => {
    for (const [key, value] of Object.entries(meal)) {
      if (key.includes('Ingredient') && value) {
        setIngredients((prev) => [...prev, value]);
      }
    }
  };

  const onGetMeasure = (meal) => {
    for (const [key, value] of Object.entries(meal)) {
      if (key.includes('Measure') && value) {
        setMeasure((prev) => [...prev, value]);
      }
    }
  };

  const onGetMealsFromId = (id) => {
    getMealFromId(id).then((res) => {
      // console.log(meal, ingredients, measure);
      const meal = res.meals[0];
      setMeal({ name: meal.strMeal, img: meal.strMealThumb });
      onGetIngredients(meal);
      onGetMeasure(meal);
    });
  };

  useEffect(() => {
    onGetMealsFromId(recipeId);
  }, [recipeId]);

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
