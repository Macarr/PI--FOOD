const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Recipes, Diets } = require("../db");
const cleanArr = require("../helper/cleanArr");
const { Op } = require("sequelize");

const getAllRecipes = async () => {
  // trae todo de la BD
  // trae todo de la API
  // unificar

  const dataBaseRecipes = await Recipes.findAll({
    include: {
      model: Diets,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const apiRecipes = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );

  const apiRecipesClean = cleanArr(apiRecipes);

  return [...dataBaseRecipes, ...apiRecipesClean];
};

const recipeControllerName = async (name) => {
  const dataBaseRecipes = await Recipes.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
    include: {
      model: Diets,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const apiRecipes = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  const apiRecipesClean = cleanArr(apiRecipes);

  const apiRecipesFiltered = apiRecipesClean.filter((rec) =>
    rec.name.toLowerCase().includes(name.toString().toLowerCase())
  );

  return [...dataBaseRecipes, ...apiRecipesFiltered];
};

module.exports = { recipeControllerName, getAllRecipes };
