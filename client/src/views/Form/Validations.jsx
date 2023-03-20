const validation = (recipesData) => {
  let errors = {};

  if (!/^[a-zA-Z-\s]+$/.test(recipesData.name)) {
    errors.name = "Invalid characters";
  }
  if (!recipesData.image) {
    errors.image = "It cant be empty";
  }

  if (!recipesData.summary) {
    errors.summary = "It cant be empty";
  }
  if (recipesData.healthScore > 100 || recipesData.healthScore < 1) {
    errors.healthScore =
      "The value of the healthScore must be between 1 and 100";
  }
  if (!recipesData.healthScore) {
    errors.healthScore = "It cant be empty";
  }
  if (recipesData.Diets.length < 1) {
    errors.Diets = "You must select at least one type of diet";
  }
  if (!recipesData.steps) {
    errors.steps = "It cant be empty";
  }

  return errors;
};
export default validation;
