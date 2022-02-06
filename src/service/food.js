import axios from 'axios';

export const getMealFromSearching = async (searchValue, setMeals) => {
  setMeals([]);
  await axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    )
    .then((response) => {
      response.data.meals.forEach((meal) => {
        setMeals((prevMeals) => [
          ...prevMeals,
          // meal,
          { id: meal.idMeal, name: meal.strMeal, img: meal.strMealThumb },
        ]);
      });
    })
    .catch((err) => console.log(err));
};