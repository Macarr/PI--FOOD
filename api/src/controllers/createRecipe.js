const { Recipes, Diets } = require("../db");
const { Op } = require("sequelize");

const createRecipe = async (
  name,
  image,
  summary,
  healthScore,
  steps,
  diets
) => {
  const newRecipe = await Recipes.create({
    name,
    image,
    summary,
    healthScore,
    steps,
  });
  let dietDb = await Diets.findOne({ where: { name: diets } });

  await newRecipe.addDiet(dietDb.dataValues.id);
  return newRecipe;
};

module.exports = createRecipe;
