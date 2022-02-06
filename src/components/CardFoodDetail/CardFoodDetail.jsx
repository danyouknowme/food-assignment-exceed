import React, { useEffect, useState } from 'react';
import './card-food-detail.css';
import { MdCheckBox } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CardFoodDetail = () => {
  const { recipeId } = useParams();
  const [meal, setMeal] = useState({
    name: '',
    img: '',
  });
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((response) => {
          const data = response.data.meals[0];
          setMeal({
            name: data.strMeal,
            img: data.strMealThumb,
          });
          for (const [key, value] of Object.entries(data)) {
            if (key.includes('Ingredient') && value) {
              setIngredients((prev) => [...prev, value]);
            } else if (key.includes('Measure') && value) {
              setMeasure((prev) => [...prev, value]);
            }
          }
        });
    };
    getData();
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
          {/* <span>
            <MdCheckBox />1 tbsp olive oil
          </span>
          <span>
            <MdCheckBox />1 tbsp olive oil
          </span>
          <span>
            <MdCheckBox />1 tbsp olive oil
          </span>
          <span>
            <MdCheckBox />1 tbsp olive oil
          </span>
          <span>
            <MdCheckBox />1 tbsp olive oil
          </span>
          <span>
            <MdCheckBox />1 tbsp olive oil
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default CardFoodDetail;
