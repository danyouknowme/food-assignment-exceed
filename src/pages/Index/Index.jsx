import React, { useState } from 'react';
import './index.css';
import { CardFood, Navbar, Searchbar } from '../../components';
import { Link } from 'react-router-dom';
import { getMealFromSearching } from '../../service/food';

const Index = () => {
  const [searchValue, setSearchValue] = useState('');
  const [meals, setMeals] = useState([]);

  return (
    <div className='container'>
      <Navbar />
      <Searchbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSubmit={() => getMealFromSearching(searchValue, setMeals)}
      />
      <div className='food-container'>
        {meals.map((meal) => (
          <Link to={`/recipes/:${meal.id}`}>
            <CardFood name={meal.name} img={meal.img} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
