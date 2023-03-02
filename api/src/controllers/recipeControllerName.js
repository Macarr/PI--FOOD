const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe } = require("../db");
const cleanArr = require("../helper/cleanArr");

const getAllRecipes = async () => {
  // trae todo de la BD
  // trae todo de la API
  // unificar

  const dataBaseRecipes = await Recipe.findAll();

  const apiRecipes = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );

  const apiRecipesFilter = cleanArr(apiRecipes);

  return [...dataBaseRecipes, ...apiRecipesFilter];
};

const recipeControllerName = async (name) => {};

module.exports = { recipeControllerName, getAllRecipes };
