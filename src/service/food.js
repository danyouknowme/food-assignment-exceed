import axios from 'axios';

export const getMealFromSearching = async (searchValue) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
  return response.data;
};

export const getMealFromId = async (recipeId) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
  return response.data;
};