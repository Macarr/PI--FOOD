const {
  recipeControllerName,
  getAllRecipes,
} = require("../controllers/recipeControllerName");

const getRecipesByName = async (req, res) => {
  const { name } = req.query;
  try {
    const recipe = name
      ? await recipeControllerName(name)
      : await getAllRecipes();
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getRecipesByName;
