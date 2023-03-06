const { Diets } = require("../db");
const { getAllRecipes } = require("./recipeControllerName");

const getAllDiets = async () => {
  const allInfo = await getAllRecipes();

  const apiDiets = allInfo.map((e) => e.diets).flat();
  console.log(apiDiets);

  await Promise.all(
    apiDiets.map((element) => {
      if (element !== undefined)
        return Diets.findOrCreate({
          where: { name: element },
        });
    })
  );

  return await Diets.findAll();
};

module.exports = getAllDiets;
