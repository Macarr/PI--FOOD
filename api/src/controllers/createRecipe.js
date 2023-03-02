const { Recipe } = require("../db");

const createRecipe = async (name, image, summary, healthScore, steps) => {
  const newRecipe = await Recipe.create({
    name,
    image,
    summary,
    healthScore,
    steps,
  });
  return newRecipe;
};

module.exports = createRecipe;
