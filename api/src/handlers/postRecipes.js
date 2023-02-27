const createRecipe = require("../controllers/createRecipe");

const postRecipes = async (req, res) => {
  const { name, imagen, resumen, healthScore, pasoAPaso } = req.body;
  try {
    const newRecipe = await createRecipe(
      name,
      imagen,
      resumen,
      healthScore,
      pasoAPaso
    );
    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postRecipes;
