require("dotenv").config();
const { API_KEY } = process.env;
const { Recipes, Diets } = require("../db");
const axios = require("axios");
const cleanArrDataBase = require("../helper/cleanArrDB");

const recipeControllerId = async (id, source) => {
  if (source === "api") {
    const recipe = await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`
      )
      .then((response) => response.data)
      .then((data) => {
        let received = {
          id: data.id,
          name: data.title,
          image: data.image,
          summary: data.summary,
          healthScore: data.healthScore,
          steps: data.analyzedInstructions[0]?.steps.map((e) => {
            return {
              number: e.number,
              step: e.step,
            };
          }),
          Diets: data.diets,
          created: false,
        };
        return received;
      });
    return recipe;
  }
  const recipesDb = await Recipes.findByPk(id, {
    include: {
      model: Diets,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  const DataBaseClean = cleanArrDataBase([recipesDb]);
  return DataBaseClean[0];
};

// const recipeControllerId = async (id, source) => {
//   const recipe =
//     source === "api"
//       ? await axios.get(
//           `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`
//         )
//       : await Recipe.findByPk(id);

//   return recipe;
// };

module.exports = recipeControllerId;
