import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardFoodDetail } from '../../components';
import './foodinfo.css';
import { getMealFromId } from '../../service/food';

const FoodInfo = () => {
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
    <div className='card-food-info-container'>
      <CardFoodDetail meal={meal} ingredients={ingredients} measure={measure} />
    </div>
  );
};

export default FoodInfo;
