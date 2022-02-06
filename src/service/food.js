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

export const getMealFromId = async (recipeId, setMeal, setIngredients, setMeasure) => {
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