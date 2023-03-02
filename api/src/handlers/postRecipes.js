const createRecipe = require("../controllers/createRecipe");

const postRecipes = async (req, res) => {
  const { name, image, summary, healthScore, steps } = req.body;
  try {
    const newRecipe = await createRecipe(
      name,
      image,
      summary,
      healthScore,
      steps
    );
    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postRecipes;
