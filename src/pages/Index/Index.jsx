import React, { useState } from 'react';
import './index.css';
import { CardFood, Searchbar } from '../../components';
import { Link } from 'react-router-dom';
import { getMealFromSearching } from '../../service/food';

const Index = () => {
  const [searchValue, setSearchValue] = useState('');
  const [meals, setMeals] = useState([]);

  const onGetMeals = (searchValue) => {
    getMealFromSearching(searchValue).then((res) => {
      res.meals.forEach((meal) => {
        setMeals((prevMeals) => [
          ...prevMeals,
          { id: meal.idMeal, name: meal.strMeal, img: meal.strMealThumb },
        ]);
      });
    });
  };

  return (
    <div className='container'>
      <Searchbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSubmit={() => onGetMeals(searchValue)}
      />
      <div className='food-container'>
        {meals.map((meal) => (
          <Link to={`/recipes/${meal.id}`} key={meal.id}>
            <CardFood name={meal.name} img={meal.img} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
