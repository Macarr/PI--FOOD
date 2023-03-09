const validation = (recipesData) => {
  let errors = {};
  if (!recipesData.name) {
    errors.name = "Este campo no puede estar vacio";
  }
  if (!/^[A-Z]+$/i.test(recipesData.name)) {
    errors.name = "El nombre de la receta no debe contener numeros ";
  }
  if (!recipesData.summary) {
    errors.summary = "Este campo no puede estar vacio";
  }
  if (recipesData.healthScore > 100 || recipesData.healthScore < 1) {
    errors.healthScore = "El valor del healthScore debe ser entre 1 y 100";
  }
  if (!recipesData.diets) {
    errors.diets = "Debe seleccionar al menos un tipo de dieta";
  }

  return errors;
};
export default validation;
