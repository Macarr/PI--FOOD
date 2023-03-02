const recipeControllerId = require("../controllers/recipeController");

const getRecipesById = async (req, res) => {
  const { id } = req.params;

  // 1° tengo que diferenciar si el id que me llega es de la api o de la base de datos para saber donde buscar la receta
  //defino una variable y si es Nan le asigno el valor "bdd" y si es un numero el valor "api"
  const source = isNaN(id) ? "bdd" : "api";

  try {
    const recipe = await recipeControllerId(id, source); //paso el source a la funcion para que sepa donde tiene que ir a buscar
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getRecipesById;
