const getRecipesById = (req, res) => {
  const { id } = req.params;

  res.send("NIY: Esta ruta obtiene el detalle de una receta por id ");
};

module.exports = getRecipesById;
