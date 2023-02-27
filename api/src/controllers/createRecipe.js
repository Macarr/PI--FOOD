const { Recipe } = require("../db");

const createRecipe = async (name, imagen, resumen, healthScore, pasoAPaso) => {
  const newRecipe = await Recipe.create({
    name,
    imagen,
    resumen,
    healthScore,
    pasoAPaso,
  });
  return newRecipe;
};

module.exports = createRecipe;
